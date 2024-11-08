// This will save how many times the Dice have been rolled

import { createContext, useState } from "react";

// Exporting Context to be picked up at any point down the line.
export const DiceContext = createContext();

const DiceProvider = ({ children }) => {
  const [timesRolled, setTimesRolled] = useState(0);

  return (
    <DiceContext.Provider value={[timesRolled, setTimesRolled]}>
      {children}
    </DiceContext.Provider>
  );
};

export default DiceProvider;