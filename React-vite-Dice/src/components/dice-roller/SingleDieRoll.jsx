import React from "react";
import { useState } from "react";
import "./dice-roller.css";

/* TODO make it so the die size is passed as props */
/* TODO Number of dice should be pulled from form in this component */


const SingleDieRoll = ({ diceSize }) => {
console.log("diceSize", diceSize, typeof(diceSize));
const [quantity, setQuantity] = useState();

const getQuantity = (e) => {
console.log("e.target.value: ",e.target.value, typeof(e.target.value));
setQuantity(parseInt(e.target.value)); // sets the value to match the event's input field value "e" and saves it as it changes
console.log("Quantity: ",quantity, typeof(quantity));
}

/* If I pass number into the following function instead of quanitty it gets to the alert but reads as undefined, otherwise it never gets there, still testing, why isn't it working?? */
  function rollDice() {

    console.log(`size`, diceSize , `quantity`, quantity); //! TEST
    if (quantity > 0) {
      timesRolled += 1;
      console.log("Times Rolled: ", timesRolled);
      result.innerHTML += `<p class="rollCounter">Roll #${timesRolled}</p>`;
      console.log(`d${diceSize}Button clicked`);
      console.log(`Count d${diceSize}Count`);
      rollDiceMultiple(diceSize, quantity);
      result.innerHTML += `<p class="sumOfDice">Sum of Dice = ${sumOfDice}</p>`;
      sumOfDice = 0;
    } else {
      console.log(diceSize);
      console.log(`Select how many D${diceSize}s you wish to roll.`);
      alert(`Select how many D${diceSize}s you wish to roll.`);
    }
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
