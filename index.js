/* setting variables for the game */
var score;
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



/*
document.getElementsByClassName("fa-solid fa-moon").addEventListener("click", darkMode);
/*/
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 print ('Dark Mode is Selected');

      }
  
  /*/    
      function myFunction() {
    
        element.classList.toggle("dark-mode");
      }


   

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  var items = ["Bop It ","Twist It ","Flick It","Pull it","Spin It"];

  var index = Infinity;
  
  function start() {
    console.log("----- shuffling -----")
    shuffle(items);
    index = 0;
  }
  
  function nextItem() {
    if (index >= items.length) {
      //re-start
      start()
    }
    
    //return current index and increment
    return items[index++];
  }
  
  document.getElementById("click_me")
    .addEventListener("click", function() {
      console.log(nextItem())
      return(nextItem())
    })



    var first = document.getElementById("username");

function welcome(){

    var welcomeF = "Welcome" + firstß;
    return welcomeF;

}

console.log(welcome());*/