/* setting variables for the game */
var score;

var items = ["bop-It ","twist-It ","flick-It","pull-it","spin-It"];
var randomItems = items[Math.floor(Math.random()* items.length)];


var bopItButton = document.getElementById("bop-it");
bopItButton.addEventListener("click", bopItClicked);

twistItButton = document.getElementById("twist-it");
twistItButton.addEventListener("click", twistItClicked);
//bopItButton.addEventListener("click", twistItClicked);
//var flickItButton = document.getElementById("flick-it");
//bopItButton.addEventListener("click", flickClicked);
//var pullItButton = document.getElementById("pull-it");
//bopItButton.addEventListener("click", pullItClicked);
//var spinItButton = document.getElementById("spin-it");
//bopItButton.addEventListener("click", spinItClicked);

/*Setting up the Audio variables for the game*/

//Array of audio files

var audioFiles= (['Pull.wav', 'Flick.wav', 'Spin.wav']);
var randomAudio = Math.floor * (Math.random * audioFiles)  
var bopItAudio = new Audio();
bopItAudio.src = "assets/audio/Bop.wav";
randomAudio.src= (["assets/audio/Bop.wav","assets/audio/Flick.wav","assets/audio/Twist.wav"]);
playRandom = Math.floor * (Math.random * randomAudio.src);



/* setting the dark mode function on the click of the moon*/
var darkmodeToggle = document.getElementById("darkmode-toggle");
darkmodeToggle.addEventListener("click", myFunction);
function myFunction() {
var element = document.body;
element.classList.toggle("dark-mode");

      }
    



    // Function for Start Game - this needs to Welcome the User, count down from 5 then select from the array, will keep going as user selects the right button but ends when they select the wrong button then displays Game over screen
    var startButton = document.getElementById("startButton");
    startButton.addEventListener("click", startGame);
    computerInstructions = document.getElementById('computer-instructions').value;

      function startGame() {
      var scoreBoard = document.getElementById("scoreboard");  
      var score =0;
  
      // choose the computer instruction from the Array
     let computerInstructions= document.getElementById("computer-instructions").innerHTML= "Computer Says:" + randomItems;
  
     
    
      }
    
   //This is for the user to input their name it will add a message for them to the screen//       
document.getElementById("user-details").addEventListener("submit", nameEntered);

    function nameEntered(event) {
    event.preventDefault();
let namePlate = document.getElementById("name");
document.getElementById("game-title").innerHTML= "This is Your Time to Shine " + namePlate.value +  " playing Bop It Extreme Online";
    }

      //alert("Yeah!" );





      // function for the Buttons - need to play the corresponding sound when each button is hit 

  
  
  function bopItClicked(){

    // need to get the id of the button and compare it to the inner html of the computer instructions
    // if this is a match - need to add to score, if it's not a macth- end game / 
    
    clickedBopIT = this.id;
alert (clickedBopIT); 
    //  if ( computerInstructions contains clickedBopIT) {
    //  score +=1;
      //echo(score);
    //} else {

      //echo("GAME OVER");
   // }
alert ("You clicked bop it");
bopItAudio.play();

  }

  function twistItClicked(){
    alert ("You clicked twist it");
    audioFiles.play();
  
    
      }

 



// section to deal with the rules screen & visibilty 
document.getElementById("show-rules-section").addEventListener("click", showRules);

function showRules() {
  
document.getElementById("show-rules-section").innerHTML ="The rules of the game are simple - keep up with the computers instructions";

}