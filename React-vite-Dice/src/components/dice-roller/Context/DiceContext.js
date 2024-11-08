import { createContext, useState } from "react";

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