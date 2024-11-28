import React from "react";
import { useContext, useState, createContext } from "react";
import "./dice-roller.css";
import SingleDieRoll from "./SingleDieRoll";
import DiceProvider, { DiceContext } from "./Context/DiceContext";
import ResultsProvider, { ResultsContext } from "./Context/ResultsContext";
import DisplayDice from "./DisplayDice";

/*Trying to figure out this useContext
https://www.youtube.com/watch?v=FpNfvbNYPsg 

https://stackoverflow.com/questions/77219497/usecontext-is-not-working-in-vite-based-react-application

Now I need to figure out the useContext for Vite... lovely its a work in progress

*/

const DiceRoller = () => {
  const [totalSides, setTotalSides] = useState(0);
  //const [timesRolled, setTimesRolled] = useContext(0); // timesRolled is being exported as Context

  const numberOfSides = (e) => {
    console.log("e.target.value: ", e.target.value, typeof e.target.value);
    setTotalSides(parseInt(e.target.value)); // sets the value to match the event's input field value "e" and saves it as it changes
    console.log("totalSides: ", totalSides, typeof totalSides);
  };

  return (
    <>
      <div>DiceRoller</div>
      <ResultsProvider>
        <DiceProvider>
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
        </DiceProvider>
        <DisplayDice />
      </ResultsProvider>
    </>
  );
};

export default DiceRoller;
