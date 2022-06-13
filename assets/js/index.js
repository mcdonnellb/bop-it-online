/* setting variables for the game */
let score = 0 ;
let i = 0;


//const items = ["bop-It","twist-It","flick-It","pull-it","spin-It"];
//just leaving the bop it and twist it instruction in the array for now for testing purposes
const items = ['bop-it', 'twist-it'];
const namePlate = document.getElementById("name");


let randomItems = items[Math.floor(Math.random()*2)];
let ci= document.getElementById("computer-instructions").innerHTML;
// setting the button variables 

const bopItButton = document.getElementById("bop-it");
bopItButton.addEventListener("click", bopItClicked);
const twistItButton = document.getElementById("twist-it");
twistItButton.addEventListener("click", twistItClicked);
//const flickItButton = document.getElementById("flick-it");
//bopItButton.addEventListener("click", flickClicked);
//const pullItButton = document.getElementById("pull-it");
//bopItButton.addEventListener("click", pullItClicked);
//const spinItButton = document.getElementById("spin-it");
//bopItButton.addEventListener("click", spinItClicked);

/*Setting up the Audio variables for the game*/

//Array of audio files - these are not working and will likely be removed before submission

var audioFiles= (['Pull.wav', 'Flick.wav', 'Spin.wav']);
var randomAudio = Math.floor * (Math.random * audioFiles)  
var bopItAudio = new Audio();
bopItAudio.src = "assets/audio/Bop.wav";




/* setting the dark mode function on the click of the moon*/
var darkmodeToggle = document.getElementById("darkmode-toggle");
darkmodeToggle.addEventListener("click", myFunction);
function myFunction() {
var element = document.body;
element.classList.toggle("dark-mode");

      }
    



    // Function for Start Game - this needs to Welcome the User, count down from 5 then select from the array, will keep going as user selects the right button but ends when they select the wrong button then displays Game over screen
const startButton = document.getElementById("startButton");
startButton.addEventListener("click", startGame);

function startGame() {
  var scoreBoard = document.getElementById("scoreboard");  
  var score =0;

  // choose the computer instruction from the Array
  let computerInstructions= document.getElementById("computer-instructions").innerHTML= randomItems;
 generateComputerInstructions();
  var timeleft = 4;
  var downloadTimer = setInterval(function() {
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      //alert("GAME OVER- TOO SLOW BRO" +score);
    }
    document.getElementById("progressBar").value = 4 - timeleft;
    timeleft -= 1;
  }, 1000);
}
    
   //This is for the user to input their name it will add a message for them to the screen//       
document.getElementById("user-details").addEventListener("submit", nameEntered);

    function nameEntered(event) {
    event.preventDefault();

document.getElementById("game-title").innerHTML= "This is Your Time to Shine " + namePlate.value +  " playing Bop It Extreme Online";
    }






      // function for the Buttons - need to play the corresponding sound when each button is hit 

  
  
  function bopItClicked(){

    // need to get the id of the button and compare it to the inner html of the computer instructions
    // if this is a match - need to add to score, if it's not a macth- end game / 
    
    clickedBopIT = this.id;
// returning the id of the button now need to compare this to the inner html of the computer instructions
// if they match add 1 to the score and update the scoreboard.
let ci = document.getElementById("computer-instructions").innerHTML;
    // comparing button clicked to the computer instruction
 //  alert(ci);
  // alert(clickedBopIT);
if (ci == clickedBopIT){
score +=1;
//clearInterval(downloadTimer);
document.getElementById("progressBar").value = 4 - timeleft;
timeleft -= 1;

console.log(score);

console.log('You got another point WOOHOO');
let scoreBUpdate = document.getElementById('scoreboard').innerHTML = namePlate +"Score" + score;
generateComputerInstructions();


    } else {
  //    alert('GAME OVER- You lose!!');
  console.log('Game over-you lose!');

  // endGame
    }


//alert ("You clicked bop it");
bopItAudio.play();

  }

  function twistItClicked(){
    clickedTwistIT = this.id;
    ci = document.getElementById("computer-instructions").innerHTML;
    if (ci == clickedTwistIT){
      score +=1;
      //alert(score);
      console.log(score);
      document.getElementById('scoreboard').innerHTML = score;
      //alert("YOU GOT ANOTHER POINT WOOHOO");
      console.log('you got another point WOOHOO');
      //document.getElementByID("scoreboard").value= namePlate+ score;
      document.getElementById("progressBar").value = 4 - timeleft;
      timeleft += 3;
 
      
      
          } else {
            console.log('GAME OVER- You lose!!' +score);
          }

      }

 



// section to deal with the rules screen & visibilty 
document.getElementById("show-rules-section").addEventListener("click", showRules);

function showRules() {
  
document.getElementById("show-rules-section").innerHTML ="The rules of the game are simple - keep up with the computers instructions";

}

// function for the timer- counts down from 4 seconds 
// this needs to be tied in with the start game funtion so that when the random selection form the array is returned, the user has 4 seconds to choose the correct button or the end game screen is displayed
var timeleft = 4;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  document.getElementById("progressBar").value = 4 - timeleft;
  timeleft -= 1;
}, 1000);



// function to deal with generating the random selection from the array

function generateComputerInstructions() {
let computerInstructions= document.getElementById("computer-instructions").innerHTML= randomItems;

//return randomItems;
console.log(randomItems[i++]);


}
