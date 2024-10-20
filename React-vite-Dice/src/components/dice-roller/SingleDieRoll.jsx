import React from "react";
import { useState } from "react";
import "./dice-roller.css";

/* TODO make it so the die size is passed as props */
/* TODO Number of dice should be pulled from form in this component */


const SingleDieRoll = ({ diceSize }, number) => {
const [quantity, setQuantity] = useState();

const getQuantity = (e) => {
console.log("e.target.value: ",e.target.value, typeof(e.target.value));
setQuantity(parseInt(e.target.value)); // sets the value to match the event's input field value "e" and saves it as it changes
console.log("Quantity: ",quantity, typeof(quantity));
number = quantity;
}

/* If I pass number into the following function instead of quanitty it gets to the alert but reads as undefined, otherwise it never gets there, still testing, why isn't it working? */
  function rollDice({ dieSize }, quantity) {
    console.log(`size`, diceSize , `quantity`, quantity,`number`, number);
    if (quantity.value > 0) {
      timesRolled += 1;
      console.log("Times Rolled: ", timesRolled);
      result.innerHTML += `<p class="rollCounter">Roll #${timesRolled}</p>`;
      console.log(`d${dieSize}Button clicked`);
      console.log(`Count d${dieSize}Count`);
      rollDiceMultiple(dieSize, quantity);
      result.innerHTML += `<p class="sumOfDice">Sum of Dice = ${sumOfDice}</p>`;
      sumOfDice = 0;
    } else {
      alert(`Select how many D${dieSize}s you wish to roll.`);
    }
  }
  return (
    <>
      <div>SingleDieRoll</div>
      <input onChange={getQuantity} type="number"></input>
      <button onClick={rollDice} className="button">
        Roll D{diceSize}
      </button>
    </>
  );
};

export default SingleDieRoll;
