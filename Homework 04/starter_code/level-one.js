/*
 * DOTS: Level One
 *
 */
let score = 0;
let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');


// add click/score function
ballEl.addEventListener('click', function(){
  score += 10;


  // keep score
  if ( score < 100 ) {
    scoreEl.innerText = score;

    // win level
  } else {
    declareWinner();
  }
});



// declares winner
function declareWinner() {
  document.body.classList.add('game-over');
}