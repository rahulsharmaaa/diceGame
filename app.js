let scores, roundScore, activePlayer, gamePlaying;

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
    
    gamePlaying = true;
    
}

init();

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying){
    // 1. random no.
    let dice = Math.floor(Math.random() * 6) + 1;
    // 2. display no.
    let diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block' ;
    diceDom.src = 'img/dice-' + dice + '.png';
    //3. add random no. until 1
    if (dice !== 1) {
        //add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //next player
        nextPlayer();
    }

  }

} );

document.querySelector('.btn-hold').addEventListener('click', function(){
        if (gamePlaying){
            // add roundscore to global 
        scores[activePlayer] += roundScore;
        //update the score
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        //check if player won
        if (scores[activePlayer] >= 50) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
        nextPlayer();
        }
    }
})

document.querySelector('.btn-new').addEventListener('click', init);