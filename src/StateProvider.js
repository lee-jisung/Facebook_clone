import React, { createContext, useContext, useReducer } from 'react';

// React Context API
//Redux와 같은 역할을 함

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
