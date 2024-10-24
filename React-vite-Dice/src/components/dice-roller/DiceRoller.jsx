import React from "react";
import { useState } from "react";
import "./dice-roller.css";
import SingleDieRoll from "./SingleDieRoll";

const DiceRoller = () => {
  const [totalSizes, setTotalSizes] = useState(0);
  const numberOfSides = (e) => {
    console.log("e.target.value: ", e.target.value, typeof e.target.value);
    setTotalSizes(parseInt(e.target.value)); // sets the value to match the event's input field value "e" and saves it as it changes
    console.log("totalSizes: ", totalSizes, typeof totalSizes);
  };
  return (
    <>
      <div>DiceRoller</div>
      <SingleDieRoll diceSize={4} />
      {/* I need to make the props passed be the die size which shouldnt be that hard*/}
      <SingleDieRoll diceSize={6} />
      <SingleDieRoll diceSize={8} />
      <SingleDieRoll diceSize={10} />
      <SingleDieRoll diceSize={12} />
      <SingleDieRoll diceSize={20} />
      <SingleDieRoll diceSize={totalSizes} />
      <input onChange={numberOfSides} type="number" min="0"></input>{" "}
      {/* This is a variable dice, and the number of sizes can be changed */}
    </>
  );
};

export default DiceRoller;
