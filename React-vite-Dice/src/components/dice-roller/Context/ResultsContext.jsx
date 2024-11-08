// This houses the results that will be displayed

import { createContext, useState } from "react";

// Exporting Context to be picked up at any point down the line.
export const ResultsContext = createContext();

const ResultsProvider = ({ children }) => {
  const [result, setResult] = useState(``);

  return (
    <ResultsContext.Provider value={[result, setResult]}>
      {children}
    </ResultsContext.Provider>
  );
};

// This is exporting the constant created from line 8
export default ResultsProvider;
