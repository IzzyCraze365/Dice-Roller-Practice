import React from "react";
import { useState } from "react";
import "./dice-roller.css";

/* TODO make it so the die size is passed as props */
/* TODO Number of dice should be pulled from form in this component */
const SingleDieRoll = ({ diceSize }) => {
  const [quantity, setQuantity] = useState();

const getQuantity = (e) => {
console.log("e.target.value: ",e.target.value);
setQuantity(e.target.value); // sets the value to match the event's input field value "e"
console.log("Quantity: ",quantity);
}

  function rollDice({ dieSize }, quantity) {
    console.log(`size`, diceSize , `quantity`, quantity);
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
