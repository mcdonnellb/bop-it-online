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
bopItButton.addEventListener("click", buttonClicked);
const twistItButton = document.getElementById("twist-it");
twistItButton.addEventListener("click", buttonClicked);
const flickItButton = document.getElementById("flick-it");
bopItButton.addEventListener("click", buttonClicked);
const pullItButton = document.getElementById("pull-it");
bopItButton.addEventListener("click", buttonClicked);
const spinItButton = document.getElementById("spin-it");
bopItButton.addEventListener("click", buttonClicked);

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
          let maxScore = 10;
          var scoreBoard = document.getElementById("scoreboard").innerHTML =score;  
          let usern= document.getElementById("user-name").innerHTML = namePlate.value;
          this.taskDelay=1000; 
       
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


function buttonClicked(){
         clickedButton = this.id;
         ci = document.getElementById("computer-instructions").innerHTML;
              if (ci == clickedButton){
                score +=1;
          document.getElementById('scoreboard').innerHTML = score;
          console.log('you got another point WOOHOO');
          //generateComputerInstructions();
          } else {
          document.getElementById('scoreboard').innerHTML ="GAME OVER" +namePlate.value +'Your score = ' +score;
          // need to add something to stop player being allowed to click on right button after game has ended eg game in play = false.
          document.getElementById('game-container').visible=false;
          canvas.preventDefault();
          
          }

      }

 



// section to deal with the rules screen & visibilty 
document.getElementById("show-rules-section").addEventListener("click", showRules);

function showRules() {
          document.getElementById("show-rules-section").innerHTML ="The rules of the game are simple - keep up with the computers instructions";
}
// function to deal with generating the random selection from the array

function generateComputerInstructions() {
  let computerInstructions= document.getElementById("computer-instructions").innerHTML= randomItems;
        for (let i = 0; i < items.length; i++) {
       
        let computerInstructions= document.getElementById("computer-instructions").innerHTML= randomItems;
        return(randomItems);
        alert(randomItems[i]);
}
}


