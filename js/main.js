import $ from 'jquery';
import _ from 'underscore';

import GoodGuy from './goodguy';
import BadGuy from './badguy';

// Good Guy Instance
let goku = new GoodGuy();
// Bad Guy Instance
let cell = new BadGuy();

// Select DOM Nodes
let gHealth = $('.gHealth');
let cHealth = $('.cHealth');
let attack = $('.attack');

//Show default health
gHealth.text(goku.health);
cHealth.text(cell.health);

// Setting up .on events
attack.on('click', function() {

  // Create random hit points
  // Good Guy attack!
  let num = _.random(0, 25);
    cell.hit(num);

  // If bad guy health <= to 0...
  if (cell.health <= 0) {

    // Error Msg for cell.health <= 0
    $(".errorMessages").text("Cell is weak... Goku wins!!!").fadeIn();
    

  // Else bad guy health alert 
  } else {
    var cHealth = document.getElementById("cHealth");
    cHealth.value = goku.hit(20);
    cHealth.getElementsByTagName('span')[100] = cell.health;

    // Error Msg for goku.hit
    $(".errorMessages").text("Cell IS Attacking!!!").fadeIn().fadeOut(), 5000;

    // // Good guy health show color change
    var gHealth = document.getElementById("gHealth");
    gHealth.value = cell.hit(5);
    cHealth.getElementsByTagName("span")[100] = goku.health;
    
  };

    console.log(cell);
  
});



console.log('Hello, World');
