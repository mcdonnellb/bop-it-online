/* setting variables for the game */
var score;
//var bopIt;
//var twistIt;
//var flickIt;
//var pullIt;
//var spinIt;
var items = ["Bop It ","Twist It ","Flick It","Pull it","Spin It"];


var bopItButton = document.getElementById("bop-it");
bopItButton.addEventListener("click", bopItClicked);
//var twistItButton = document.getElementById("twist-it");
//bopItButton.addEventListener("click", twistItClicked);
//var flickItButton = document.getElementById("flick-it");
//bopItButton.addEventListener("click", flickClicked);
//var pullItButton = document.getElementById("pull-it");
//bopItButton.addEventListener("click", pullItClicked);
//var spinItButton = document.getElementById("spin-it");
//bopItButton.addEventListener("click", spinItClicked);

/*Setting up the Audio variables for the game*/

var audio1 = new Audio();
audio1.src = "assets/audio/Bop.wav";
//audio[1] = new Audio();
//audio[1].src = "assets/audio/Twist.wav";
//audio[2] = new Audio();
//audio[2].src = "assets/audio/Spin.wav";
//audio[3] = new Audio();
//audio[3] = "assets/audio/Pull.wav";
//audio[4] = new Audio();
//audio[4] = "assets/audio/Flick";
//workspace/bop-it-online/assets/audio/Spin.wav


/* setting the dark mode function on the click off the moon*/
var darkmodeToggle = document.getElementById("darkmode-toggle");
darkmodeToggle.addEventListener("click", myFunction);
function myFunction() {
var element = document.body;
element.classList.toggle("dark-mode");
return ('Dark Mode is Selected');

      }
    



      // Function for Start Game - this needs to Welcome the User, count down from 5 then select from the array, will keep going as user selects the right button but ends when they select the wrong button then displays Game over screen
      

    var startButton = document.getElementById("startButton");
    startButton.addEventListener("click", startGame);

      function startGame() {
        document.getElementById("computer-instructions").innerHTML="<h4>Welcome to Bop IT</h4>";
        
      }

      alert("Yeah!" );

      // function for the Buttons - need to play the corresponding sound when each button is hit 

  
 
  
  
  
  function bopItClicked(){
alert ("You clicked bop itgggg");
audio1.play();

  }

 

 



