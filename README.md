# Dice-Roller-Practice


### Purpose
The purpose of this Program was to make a workable Dice Roller Application that can be used as practice for coding in different languages.

Since creating a Dice Roller is not overly complicated logic wise this will showcase how to create one in different programing languges that I am learning.

I am also using this to practice my styling.

## Programming Languages

### HTML, CSS, & Javascript

#### Version 1
Initial test version.  The most basic logic works for the dice roller in the background but the buttons are not wired up correctly. It used Event Listeners in the JS.  I decided to try some alternatives to make the code more streamline.

Ultimately, I decided to move on to V2 and use this version's code as a blueprint.



#### Version 2
My first fully working version of this code that has the design that I am happy with.  Once the logic was finished I spent more time on the UI and design features which was the purpose of this text.  All the files were contained one file.  This way I can throw it on a thumb drive.


#### Version 3
Version 3 seperate the files into an HTML, CSS and JavaScript for ease of understanding.  Otherwise its functionality is identical to Version 2.

##### Logic Tree is as follows:
- Click a button triggers ***rollDice*** (or ***rollVariableDice*** or ***rollAllDice***)
    - ***rollAllDice*** triggers ***rollDiceMultiple***
    - ***rollVariableDice*** is self enclosed
- ***rollDice*** triggers ***rollDiceMultiple***
- ***rollDiceMultiple*** triggers ***rollDiceDisplay***
- ***rollDiceDisplay*** hits the random number generator

### React + Vite
I am building the Dice Roller as a reusable component that can easily be slotted into any react project.  This will showcase the ease of slotting in components.