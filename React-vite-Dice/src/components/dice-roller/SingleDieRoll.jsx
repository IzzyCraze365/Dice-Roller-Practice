import React from "react";
import { useContext, useState } from "react";
import "./dice-roller.css";
import { DiceContext } from "./Context/DiceContext";
import { ResultsContext } from "./Context/ResultsContext";

// TODO okay now its time to look into setState

/* The die size is passed as props */
/* The Number of dice should be pulled from from in this component */

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
