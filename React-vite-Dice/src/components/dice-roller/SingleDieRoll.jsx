import React from "react";
import { useContext, useState } from "react";
import "./dice-roller.css";
import { DiceContext } from "./Context/DiceContext";
import { ResultsContext } from "./Context/ResultsContext";



/* The die size is passed as props */
/* The Number of dice should be pulled from form in this component */

const SingleDieRoll = ({ diceSize }) => {
  const [timesRolled, setTimesRolled] = useContext(DiceContext); //This is pulling the values from the DiceContext Provider
  const [result, setResult] = useContext(ResultsContext); //This is pulling the values from the ResultsContext Provider
  

  const [quantity, setQuantity] = useState();
  const [sumOfDice, setSumOfDice] = useState(0);
  //console.log("diceSize", diceSize, typeof diceSize); //! TEST

  const getQuantity = (e) => {
    console.log("e.target.value: ", e.target.value, typeof e.target.value);
    setQuantity(parseInt(e.target.value)); // sets the value to match the event's input field value "e" and saves it as it changes
    console.log("Quantity: ", quantity, typeof quantity);
  };

  /* If I pass number into the following function instead of quanitty it gets to the alert but reads as undefined, otherwise it never gets there, still testing, why isn't it working?? */
  function rollDice() {
    console.log(`inside rollDice`);
    console.log("sumOfDice",sumOfDice);
    setSumOfDice(0);
    console.log("sumOfDice",sumOfDice);
    console.log(`size`, diceSize, `quantity`, quantity); //! TEST
    if (quantity > 0) {
      setTimesRolled(timesRolled+1);
      console.log("Times Rolled: ", timesRolled);
      setResult(result+`<p class="rollCounter">Roll #${timesRolled}</p><br>`);
      console.log(`d${diceSize}Button clicked`);
      console.log(`Count d${diceSize}Count`);
      rollDiceMultiple(diceSize, quantity);
     setResult(result+`Sum of Dice = ${sumOfDice}<br>`);
    } else {
      console.log(diceSize);
      console.log(`Select how many D${diceSize}s you wish to roll.`);
      alert(`Select how many D${diceSize}s you wish to roll.`);
    }
  }

  
function rollDiceMultiple(size, quantity) {
  //This works by checking both to be above the Variable Dice
  console.log("Inside rollDiceMultiple.  Size:", size,"Quantity:",quantity)
  for (let i = 0; i < quantity; i++) {
    console.log(`Times Rolling a D${size} = #${i + 1}`);
    rollDiceDisplay(size);
  }
}

// This function prints the results of the Dice Rolls.
function rollDiceDisplay(maxValue) {
  console.log("Inside rollDiceDisplay.  maxValue:", maxValue)
  let outcome = randomNum(1, maxValue);
  console.log(`Outcome: `, outcome);
  setResult(result+`<p>D${maxValue} result is ${outcome}</p><br>`);
  setSumOfDice(sumOfDice+outcome);
  console.log("sumOfDice",sumOfDice)
  /* display.style.display = "block";
  clearHistoryButton.style.display = "block"; */
}

// Classic Random Number Generator Helper Function
function randomNum(min, max) {
  let range = max - min + 1;
  console.log(`Min: ${min} / Max: ${max} / Range: ${range}`);
  return Math.floor(Math.random() * range) + min;
}

//Todo the following funtions need to be editied
/* 
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
 */

  return (
    <>
      <div>SingleDieRoll</div>
      <input onChange={getQuantity} type="number" min="0"></input>
      <button onClick={rollDice} className="button">
        Roll D{diceSize}
      </button>
    </>
  );
};

export default SingleDieRoll;
