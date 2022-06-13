## Project 2


####  Bop-it Online ineractive site
My idea for project 2 is for an interactive 'Bop-it' online game. To meet the project criteria, this needs to be an interactive site as well as incorporating user choice when it comes to the display of information, or to achieve their preferred goals.

## Technologies used:
*HTML
*CSS
*JavaScript

Bop it was a game popularised in the 90's as a boredom beater, whereby the user would be guided by audio to selectand engage with one of the 5 choices below.

  Bop it
  Flick it
  Twist it 
  Pull it
  Spin it 

The user had approximately 4/5 few seconds to make the correct choice or they lose the game. The time decreases the higher the score you attain thus increasing the difficulty of the game, and increasing the chance of human error. My interactive site/ game will be built around the same principles of chance. The game was renowned for it's use of cheeky slang and comments if you lose - something I want to keep as true to life as possible to make it a thoroughly reminiscint reimagining of the Hasbro 90s classic.

#### Elements I wish to include:

* Theme selector - bright and light or dark mode
* Name input field prior to game kick off
* Scoreboard  
* High score dahsboard on main page.


## My iniital Brainstorm around this Project and idea flow:
-User enters usernmae
* Message appears - Hi username, please hit start to begin or click here to view the rules. 
* Start Button - count down from 5
 * Onclick the computer selects at random from Bop it, twist it, flick it pull it.
* The user has 4 seconds to hit the corresponding button
* If the user hits the wrong button - Game Over displays with the score
* If the user makes the right choice it adds a point to the score and keeps looping until the user makes a wrong choice
* After 10 correct selections, the user has 3 seconds to make the right selection
* After 20 correct seclections, the user has 2 seconds
* After 30 correct selections the user has 1 second.
* If user achieves a high score it is saved to the Scoreboard with the username. 

#### UX
##  External user’s goal:

    The site’s users want to play an online game that has elements of chance.

##  Site owner's goal:

    The site’s goal is to provide a challenging game with increasing levels of difficulty to entertain online users.



## Design
The colors I have chosen are once again in line with my personal minimalistic preference, and keeping in line with the Bop IT/ Hasbro  Branding colours.

#### Light Mode
Background: White
Font: Purple

#### Dark Mode
Background - Black 
Font - Yellow
Navigation items , text etc white


#### Typography
The typography used throughout the site was specifically chosen as I felt it was a bold yet readable font, again tying in with the Hasbro branding.


#### Images and Media
The images used for this project have been taken from the below sites:


The audio for the game was taken from the below website and was the audio from the original game created by Hasbro:

https://www.sounds-resource.com/mobile/bopit/sound/23634/


## Citations
I drew inspiration heavily from the love Maths project completed as part of the course. I used this as almost a template or boiler plate for structural purposes.

`python3 -m http.server`


w3 schoools
Github

https://stackoverflow.com/questions/19844545/replacing-css-file-on-the-fly-and-apply-the-new-style-to-the-page

Thank you to my wonderful mentor Martina, for her excellent and helpful insight. My focus from the outset was to ensure I hit the pass criteria, and Martina helped break this down for me into easier to manage chunks, without which i\ would have essentially allowed the scope to creep into a non plausable for delivery territory.

Thank you to Kasia Bogucka the cohort leader for her kind nature and dedication to ensure we all success at our 

------

## Testing

The first round of testing ws physically checking for errors in the validators, which was completed on a daily basis was to run through the HTML and CSS validators to ensure there were no errors. I decided to do this daily to reduce the chance of introducing lots of errors in to my code which would take a long time to debug and resolve. This is one of the major lessons learned from my last project.

Lighthouse testing 

User testing

Peer Code Review 

Mentor 

Tutor

I used Tutor support for this project as I really struggled with some of my Javascript functions. The tutors, while not fixing or amending my code, were able to steer me back onto the right path by reiterating industry standards/ common practice in key areas I was clearly lacking.

## Error Log 
Some of the critical errors found and the items used to overcome the errors

Start Game funtion - initially I had the generate random computer instruction function within start game function.

Start Game - would only generate item from array once, even if clicked on multiple times, you had to refresh the page then reclick and it may generate a different item.

#### Known Bugs
* If you click on the welcome section it will update with the rules but this screen remains

#### Items to be addressed in future iterations
I honestly could have kept working on this for the next 3 months, it was such an enjoyable (albeit frusttrating at times) experience. 

Items which I had intended to include ( after I let scope creep get the better of me)

* Include the audio files noted in the media section - this would ensure accessability to the use of the game for those who are visually impaired. This would include the generation of a random computer instruction, the taunts if you lose, and also the cheers if you get a high score.
* High Score capture with a scoreboard on the main page.
* Difficulty selection - eg: array for easy with 3 instructions, array for medium with 5 instructions, array for hard with 5 instructions and timer varibale of 2 seconds.

#### Lessons Learned
Keep it simple- define a basic scope and stick to it to avoid scope creep. I once agaib found myself in the situation where I was down a stackoverflow rabbit hole and W3schools looking at dark mode toggles for a huge amount of time, when infact this added nothing to the game itself. The time woudld have been better spent focussing on the core elements of the game, and then once they were implemented, looking into items such as dark mode.

This is something I struggle with, I get overwhelmed with the amount of items that need to be done, and then misinterpret or miscalculate the importance of some of the other items. This is somehting I have been working on and every time I find myself down a rabbit hole, I go back to my critical list, is the item I am working on critical, or is it a 'nice to have'.

Dont be afraid to ask for help - I sufferend in silence on this one for quite some time as I didnt want to appear to be struggling, but this really prolonged the pain when in fact sometimes peer review , or a second set of eyes is exactly what is needed.

