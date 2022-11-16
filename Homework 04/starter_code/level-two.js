/*
 * DOTS: Level Two
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');


// add click/score function

arenaEl.addEventListener('click', function(points){

// keep score

    if (points.target.classList.contains('js-ball')){
        score += 10;

        if (score < 100) {
            scoreEl.innerText = score;

// win level
         } else {
                declareWinner();
                }
        }
    }
)


// declares winner

function declareWinner() {
    document.body.classList.add('game-over');
  }