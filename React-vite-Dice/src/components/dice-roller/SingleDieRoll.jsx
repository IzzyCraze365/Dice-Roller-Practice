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
  console.log("diceSize", diceSize, typeof diceSize);

  const getQuantity = (e) => {
    console.log("e.target.value: ", e.target.value, typeof e.target.value);
    setQuantity(parseInt(e.target.value)); // sets the value to match the event's input field value "e" and saves it as it changes
    console.log("Quantity: ", quantity, typeof quantity);
  };

  /* If I pass number into the following function instead of quanitty it gets to the alert but reads as undefined, otherwise it never gets there, still testing, why isn't it working?? */
  function rollDice() {
    //const timesRolled = useContext(TimesRolledContext)
    console.log(`size`, diceSize, `quantity`, quantity); //! TEST
    //console.log(`timesRolled`, timesRolled); //! TEST
    if (quantity > 0) {
      setTimesRolled(timesRolled+1);
      console.log("Times Rolled: ", timesRolled);
      setResult(result+`<p class="rollCounter">Roll #${timesRolled}</p>`);
      console.log(`d${diceSize}Button clicked`);
      console.log(`Count d${diceSize}Count`);
      rollDiceMultiple(diceSize, quantity);
     setResult(result+`<p class="sumOfDice">Sum of Dice = ${sumOfDice}</p>`);
      setSumOfDice(0);
    } else {
      console.log(diceSize);
      console.log(`Select how many D${diceSize}s you wish to roll.`);
      alert(`Select how many D${diceSize}s you wish to roll.`);
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
  setResult(result+`<p>D${maxValue} result is ${outcome}</p>`);
  setSumOfDice(sumOfDice+outcome);
  console.log("sumOfDice",sumOfDice)
  display.style.display = "block";
  clearHistoryButton.style.display = "block";
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
