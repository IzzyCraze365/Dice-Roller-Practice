import React from "react";
import { useContext, useState } from "react";
import "./dice-roller.css";
import SingleDieRoll from "./SingleDieRoll";

const DiceRoller = () => {
  const [totalSides, setTotalSides] = useState(0);
  //TODO I need to add the useContext below
/*   const [timesRolled, setTimesRolled] = useContext(0); */
  const numberOfSides = (e) => {
    console.log("e.target.value: ", e.target.value, typeof e.target.value);
    setTotalSides(parseInt(e.target.value)); // sets the value to match the event's input field value "e" and saves it as it changes
    console.log("totalSides: ", totalSides, typeof totalSides);
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
      <SingleDieRoll diceSize={totalSides} />
      <input onChange={numberOfSides} type="number" min="0"></input>{" "}
      {/* This is a variable dice, and the number of sizes can be changed */}
    </>
  );
};

export default DiceRoller;
