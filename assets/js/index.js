/* setting variables for the game */
var score;
var bopIt;
var twistIt;
var flickIt;
var pullIt;
var spinIt;
var items = ["Bop It ","Twist It ","Flick It","Pull it","Spin It"];

var bopItButton = document.getElementById("bop-it");
bopItButton.addEventListener("click", bopItClicked);
var twistItButton = document.getElementById("twist-it");
bopItButton.addEventListener("click", twistItClicked);
var flickItButton = document.getElementById("flick-it");
bopItButton.addEventListener("click", flickClicked);
var pullItButton = document.getElementById("pull-it");
bopItButton.addEventListener("click", pullItClicked);
var spinItButton = document.getElementById("spin-it");
bopItButton.addEventListener("click", spinItClicked);

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


/* setting the dark mode function on the click off the moon*/
let darkmodeToggle = document.getElementById("darkmode-toggle");

darkmodeToggle.addEventListener("click", myFunction);
function myFunction() {
var element = document.body;
element.classList.toggle("dark-mode");
return ('Dark Mode is Selected');

      }
    



      // GET the innerHTML:
      

    
      document.getElementById("startButton").addEventListener("click", startGame());

      function startGame() {
        document.getElementById("computer-instructions").innerHTML="<h4>Welcoem to Bop IT</h4>";
        let welcome = document.createElement('p');
        welcome.innerHTML = "Shopping complete!"
        complete.style.color = "red";
        complete.style.fontWeight = "bold";
      }

      alert("Yeah!" );


 
  
  
  
  

 

 



