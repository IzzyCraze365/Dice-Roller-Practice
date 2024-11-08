import React from "react";
import { useContext } from "react";
import "./dice-roller.css";
import { ResultsContext } from "./Context/ResultsContext";

const DisplayDice = () => {
  const [result, setResult] = useContext(ResultsContext); //This is pulling the values from the ResultsContext Provider

  return (
    <>
      <div dangerouslySetInnerHTML={{__html: result}}></div>
    </>
  );
};

export default DisplayDice;
