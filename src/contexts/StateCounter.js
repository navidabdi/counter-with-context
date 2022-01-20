import React, { useState, useContext, createContext } from 'react';

const StateContext = createContext();

export const StateCounter = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <StateContext.Provider value={{ counter, setCounter }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
