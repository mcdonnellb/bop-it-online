/* setting variables for the game */
var score;
var gameControlArray =["Bop It ","Twist It ","Flick It","Pull it","Spin It"];
var bopIt;
var twistIt;
var flickIt;
var pullIt;
var spinIt;
let moon = document.getElementById("moon");

/*Setting up the Audio variables for the game*/
var audio = [];
audio[0] = new Audio();
audio[0].src = "assets/audio/Bop.wav";
audio[1] = new Audio();
audio[1].src = "assets/audio/Twist.wav";
audio[2] = new Audio();
audio[2].src = "assets/audio/Spin.wav";
audio[3] = new Audio();
audio[3] = "assets/audio/Pull.wav";
audio[4] = new Audio();
audio[4] = "assets/audio/Flick";




/* document.getElementsByClassName("fa-solid fa-moon").addEventListener("click", darkMode);
*/
/*
function darkMode() {
    console.log('Dark Mode is Selected');
document.getElementById('body').style.color = "white";
 document.getElementById("body").style.backgroundcolor = "black";
 
      }
  */
      let var element = document.body;
      function myFunction() {
    
        element.classList.toggle("dark-mode");
      }

   function lightMode() {
    
    let myVar= document.getElementById('sun');
    let lightModeBody = document.getElementById[0]('body');

  
   }
   
   