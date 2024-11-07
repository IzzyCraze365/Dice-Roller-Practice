// Im not sure I need this file anymore...?

import { createContext } from "react";

//let timesRolled = 0;

//export const DiceContext = createContext<timesRolled | undefined>(undefined);

/*Trying to figure out how to impliment the useContext
https://www.youtube.com/watch?v=FpNfvbNYPsg */


/* This is the Version 3 JavaScript that makes the Dice Roll, I need to translate it to react */

/* Linking IDs to usable Variables */
let toggleThemeBtn = document.getElementById("toggleThemeBtn");
let d4Count = document.getElementById("d4Count");
let d4Button = document.getElementById("d4Button");
let d6Count = document.getElementById("d6Count");
let d6Button = document.getElementById("d6Button");
let d8Count = document.getElementById("d8Count");
let d8Button = document.getElementById("d8Button");
let d10Count = document.getElementById("d10Count");
let d10Button = document.getElementById("d10Button");
let d12Count = document.getElementById("d12Count");
let d12Button = document.getElementById("d12Button");
let d20Count = document.getElementById("d20Count");
let d20Button = document.getElementById("d20Button");
let d100Count = document.getElementById("d100Count");
let d100Button = document.getElementById("d100Button");
let dXCount = document.getElementById("dXCount");
let dXButton = document.getElementById("dXButton");
let dieSize = document.getElementById("dieSize");
let display = document.getElementById("display");
let result = document.getElementById("result");
let clearHistoryButton = document.getElementById("clearHistory");
let timesRolled = 0;
let sumOfDice = 0;

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

function rollDice(size, quantity) {
  console.log(`size`, size, `quantity`, quantity.value);
  if (quantity.value > 0) {
    timesRolled += 1;
    console.log("Times Rolled: ", timesRolled);
    result.innerHTML += `<p class="rollCounter">Roll #${timesRolled}</p>`;
    console.log(`d${size}Button clicked`);
    console.log(`Count d${size}Count`);
    rollDiceMultiple(size, quantity);
    result.innerHTML += `<p class="sumOfDice">Sum of Dice = ${sumOfDice}</p>`;
    sumOfDice = 0;
  } else {
    alert(`Select how many D${size}s you wish to roll.`);
  }
}

// This had to be seperate because it is such a wonky function to try to intergrate.???
function rollVariableDice(size, quantity) {
  console.log(`size`, size, `quantity`, quantity.value);
  if (parseInt(dieSize.value) === 0 && parseInt(dXCount.value) >= 0) {
    console.log(
      "dieSize.value",
      parseInt(dieSize.value),
      "dXCount.value",
      parseInt(dXCount.value)
    );
    alert(
      `When rolling the variable die (Roll D?), \nPlease, select number of sides you wish to roll. \nYou cannot roll a die with 0 sides...`
    );
  } else if (parseInt(dXCount.value) === 0) {
    alert(
      `Select how many Variable Dice (currently D${size}s) you wish to roll.`
    );
  } else {
    timesRolled += 1;
    console.log("Times Rolled: ", timesRolled);
    result.innerHTML += `<p class="rollCounter">Roll #${timesRolled}</p>`;
    for (let i = 0; i < quantity.value; i++) {
      console.log(`Rolling Die #${i + 1}`);
      let outcome = randomNum(1, size);
      console.log(`Outcome: `, outcome);
      result.innerHTML += `<p>Variable Die with ${size} sides rolled a ${outcome}</p>`;
      sumOfDice += outcome;
    }
    result.innerHTML += `<p class="sumOfDice">Sum of Dice = ${sumOfDice}</p>`;
    display.style.display = "block";
    clearHistoryButton.style.display = "block";
    sumOfDice = 0;
  }
}

// Function to Roll all selected Dice
function rollAllDice() {
  let totalDice =
    parseInt(d4Count.value) +
    parseInt(d6Count.value) +
    parseInt(d8Count.value) +
    parseInt(d10Count.value) +
    parseInt(d12Count.value) +
    parseInt(d20Count.value) +
    parseInt(d100Count.value) +
    parseInt(dXCount.value);
  console.log(`Total Dice being rolled =`, totalDice);
  if (parseInt(dieSize.value) === 0 && parseInt(dXCount.value) > 0) {
    console.log(
      "dieSize.value",
      parseInt(dieSize.value),
      "dXCount.value",
      parseInt(dXCount.value)
    );
    alert("Select number of sides on your dice.");
    return;
  } else if (totalDice > 0) {
    timesRolled += 1;
    console.log("Rolling all Dice, Times Rolled: ", timesRolled);
    result.innerHTML += `<p class="rollCounter">Roll #${timesRolled}</p>`;
    if (d4Count.value) {
      // Do not need to specify that it is Greater than 0 because the if statement automatically checks to see that it has value.
      rollDiceMultiple(4, d4Count);
    }
    if (d6Count.value) {
      // checks to see .value > 0
      rollDiceMultiple(6, d6Count);
    }
    if (d8Count.value) {
      // checks to see .value > 0
      rollDiceMultiple(8, d8Count);
    }
    if (d10Count.value) {
      // checks to see .value > 0
      rollDiceMultiple(10, d10Count);
    }
    if (d12Count.value) {
      // checks to see .value > 0
      rollDiceMultiple(12, d12Count);
    }
    if (d20Count.value) {
      // checks to see .value > 0
      rollDiceMultiple(20, d20Count);
    }
    if (d100Count.value) {
      // checks to see .value > 0
      rollDiceMultiple(100, d100Count);
    }
    if (dXCount.value) {
      // checks to see .value > 0
      for (let i = 0; i < dXCount.value; i++) {
        console.log(`Rolling Die #${i + 1}`);
        let outcome = randomNum(1, dieSize.value);
        console.log(`Outcome: `, outcome);
        result.innerHTML += `<p>Variable Die with ${dieSize.value} sides rolled a ${outcome}</p>`;
        sumOfDice += outcome;
      }
    }
    result.innerHTML += `<p class="sumOfDice">Sum of Dice = ${sumOfDice}</p>`;
    sumOfDice = 0;
  } else {
    alert("Select some number of Dice to roll.");
  }
}

function rollDiceMultiple(size, quantity) {
  //This works by checking both to be above the Variable Dice
  for (let i = 0; i < quantity.value; i++) {
    console.log(`Times Rolling a D${size} = #${i + 1}`);
    rollDiceDisplay(size);
  }
}

// This function prints the results of the Dice Rolls.
function rollDiceDisplay(maxValue) {
  //let newLine = document.createElement("p");
  let outcome = randomNum(1, maxValue);
  console.log(`Outcome: `, outcome);
  result.innerHTML += `<p>D${maxValue} result is ${outcome}</p>`;
  sumOfDice += outcome;
  display.style.display = "block";
  clearHistoryButton.style.display = "block";
}

// Classic Random Number Generator Helper Function
function randomNum(min, max) {
  let range = max - min + 1;
  console.log(`Min: ${min} / Max: ${max} / Range: ${range}`);
  return Math.floor(Math.random() * range) + min;
}

// Resets all Values for the Dice Rollers
function reset() {
  console.log(`Reset Button Clicked`);
  clearHistory();
  d4Count.value = 0;
  d6Count.value = 0;
  d8Count.value = 0;
  d10Count.value = 0;
  d12Count.value = 0;
  d20Count.value = 0;
  d100Count.value = 0;
  dXCount.value = 0;
  dieSize.value = 0;
}

// Clears the History of the Dice Roller but preserves the numbers in the Code.
function clearHistory() {
  console.log(`Clearing History`);
  timesRolled = 0;
  sumOfDice = 0;
  result.textContent = "";
  display.style.display = "none";
  clearHistoryButton.style.display = "none";
}
