/* setting variables for the game */
var score = 0;
//just leaving the bop it and twist it instruction in the array for now for testing purposes
//let items = ["bop-it", "twist-it", "pull-it", "flick-it", "spin-it"];
const namePlate = document.getElementById("name");


//let randomItems = items[Math.floor(Math.random()*5 )];
//let ci= document.getElementById("computer-instructions").innerHTML;
// setting the button variables 

const bopItButton = document.getElementById("bop-it");
bopItButton.addEventListener("click", buttonClicked);
const twistItButton = document.getElementById("twist-it");
twistItButton.addEventListener("click", buttonClicked);
const flickItButton = document.getElementById("flick-it");
flickItButton.addEventListener("click", buttonClicked);
const pullItButton = document.getElementById("pull-it");
pullItButton.addEventListener("click", buttonClicked);
const spinItButton = document.getElementById("spin-it");
spinItButton.addEventListener("click", buttonClicked);


/* setting the dark mode function on the click of the lightbulb - I read many a thread about dark mode main inspo taken from w3c schools*/
let darkmodeToggle = document.getElementById("darkmode-toggle");
darkmodeToggle.addEventListener("click", enableDarkmode);
function enableDarkmode() {
        var element = document.body;
        element.classList.toggle("dark-mode");
}

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", startGame);

function startGame() {
let gamecontShown = document.getElementById("game-container");
gamecontShown.style.display = "block";
let ci= document.getElementById("computer-instructions").innerHTML;
let score =0;
let maxScore = 10;
let usern= document.getElementById("user-name").innerHTML = namePlate.value; 
generateComputerInstructions();
 }
            
   //This code is for the user to input their name it will add a message for them to the screen//       
document.getElementById("user-details").addEventListener("submit", nameEntered);

    function nameEntered(event) {
            event.preventDefault();
            document.getElementById("game-title").innerHTML= "This is Your Time to Shine " + namePlate.value;
            document.getElementById("user-name").innerHTML= namePlate.value;
    }
   function gameOver(){
          let gameContainerHidden = document.getElementById('game-container');
          let gameVariablesScreenHidden = document.getElementById('game-variables');
          gameContainerHidden.style.display = "none";
          gameVariablesScreenHidden.style.display = "none";
          let endGameScreen = document.getElementById('end-game-screen');
          endGameScreen.style.display ="block";
          let ud = document.getElementById("user-details");
          ud.style.display="none";
          let sb = document.getElementById("startButton");
          sb.style.display ="none";
          let gt = document.getElementById("game-title");
          gt.innerHTML= "Maybe next time  " +namePlate.value ; 
          let bopItAudio = new Audio();
          bopItAudio.src = "assets/audio/Banter_52.wav";
          bopItAudio.play();
    }


function buttonClicked(){
        let clickedButton = this.id;
        let ci = document.getElementById("computer-instructions").innerHTML;
              if (ci == clickedButton){
                score +=1;
          document.getElementById('scoreboard').innerHTML ="YOUR POINTS:   " +score;
          generateComputerInstructions();
          } else {
          document.getElementById('scoreboard').innerHTML ="GAME OVER" +namePlate.value +'YOUR POINTS = ' +score;
          gameOver(); 
          }
      }

document.getElementById("try-again").addEventListener("click", reloadPage);
function reloadPage() {
  let gos = document.getElementById("end-game-screen");
  gos.style.display="none";
  location.reload();
  return false;
}
function generateComputerInstructions() {
let items = ["bop-it", "twist-it", "pull-it", "flick-it", "spin-it"];
let randomItems = items[Math.floor(Math.random()*5 )];
for (let i = 0; i < 5; i++) {
let computerInstructions= document.getElementById("computer-instructions").innerHTML= randomItems;
}
}


