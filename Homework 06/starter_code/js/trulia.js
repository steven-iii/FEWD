

let truliaCards = document.getElementsByClassName("trulia-grid-item");



document.addEventListener('DOMContentLoaded', function(event) {

// Toggle the navigation

document.querySelector('.trulia-nav-toggle').addEventListener('click', function(toggle){
  toggle.preventDefault();
  let navBar = document.querySelectorAll('.trulia-nav > nav ul');

  for (let n=0; n < navBar.length; n++){
    navBar[n].classList.toggle('trulia-nav-mobilehide');
  }
});




// Loop through all the cards
for (var l=0; l < truliaCards.length; l++){    

  // Add a click listener on each card
    truliaCards[l].addEventListener('click', function(){


      // Remove the featured class
      for (var r = 0; r < truliaCards.length; r++){
        truliaCards[r].classList.remove('trulia-featured-grid-item');
      }

      // Add the featured class on the one clicked on
      this.classList.add('trulia-featured-grid-item');
    });
}});  



