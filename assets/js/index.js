/* setting variables for the game */
var score = 0;

var items = ["Bop It ","Twist It ","Flick It","Pull it","Spin It"];
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

//var twistItAudio = new Audio();
//twistItAudio.src = "assets/audio/Twist.wav";
//var spin-it-audio = new Audio();
//spin-it-audio.src = "assets/audio/Spin.wav";


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
      document.getElementById("computer-instructions").innerHTML= "Computer Says:" + randomItems;
      playRandom.play();
      score ++;
  
var number = Math.floor(Math.random() * 2 );
var score = document.getElementById("scoreboard");


      }
      alert("Yeah!" );

      // function for the Buttons - need to play the corresponding sound when each button is hit 

  
  
  function bopItClicked(){
alert ("You clicked bop it");
bopItAudio.play();

  }

  function twistItClicked(){
    alert ("You clicked twist it");
    audioFiles.play();
  
    
      }

 



