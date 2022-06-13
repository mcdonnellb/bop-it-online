/* setting variables for the game */
var score = 0;



//const items = ["bop-It","twist-It","flick-It","pull-it","spin-It"];
//just leaving the bop it and twist it instruction in the array for now for testing purposes
const items = ['bop-it', 'twist-it'];
const namePlate = document.getElementById("name");


let randomItems = items[Math.floor(Math.random()* items.length)];
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
          let score =0;
          var scoreBoard = document.getElementById("scoreboard").innerHTML =score;  
          let usern= document.getElementById("user-name").innerHTML = namePlate.value;
         // choose the computer instruction from the Array
        // let computerInstructions= document.getElementById("computer-instructions").innerHTML= randomItems;
        generateComputerInstructions();
        }

   //This is for the user to input their name it will add a message for them to the screen//       
document.getElementById("user-details").addEventListener("submit", nameEntered);

    function nameEntered(event) {
            event.preventDefault();
            document.getElementById("game-title").innerHTML= "This is Your Time to Shine " + namePlate.value +  " playing Bop It Extreme Online";
            document.getElementById("user-name").innerHTML= namePlate.value;
    }
// function for the Buttons - need to play the corresponding sound when each button is hit 
function bopItClicked(){
// need to get the id of the button and compare it to the inner html of the computer instructions
          clickedBopIT = this.id;
          // score = document.getElementById('scoreboard').innerHTML;
           ci = document.getElementById("computer-instructions").innerHTML;
           if (ci == clickedBopIT){
             score +=1;
             alert(score);
            // console.log(score);
            document.getElementById('scoreboard').innerHTML = score;
             //alert("YOU GOT ANOTHER POINT WOOHOO");
             console.log('you got another point WOOHOO');
                 } else {
                   console.log('GAME OVER- You lose!!' +score);
                 }
       
             }
       


//alert ("You clicked bop it");
bopItAudio.play();

 

  function twistItClicked(){
    clickedTwistIT = this.id;
   // score = document.getElementById('scoreboard').innerHTML;
    ci = document.getElementById("computer-instructions").innerHTML;
    if (ci == clickedTwistIT){
      score +=1;
      alert(score);
     // console.log(score);
     document.getElementById('scoreboard').innerHTML = score;
      //alert("YOU GOT ANOTHER POINT WOOHOO");
      console.log('you got another point WOOHOO');

 
      
      
          } else {
            console.log('GAME OVER- You lose!!' +score);
          }

      }

 



// section to deal with the rules screen & visibilty 
document.getElementById("show-rules-section").addEventListener("click", showRules);

function showRules() {
          document.getElementById("show-rules-section").innerHTML ="The rules of the game are simple - keep up with the computers instructions";
}
// function to deal with generating the random selection from the array

function generateComputerInstructions() {
        for (let i = 0; i < 5; i++) {
        //text += "The number is " + i + "<br>";
        let computerInstructions= document.getElementById("computer-instructions").innerHTML= randomItems;
}
}


