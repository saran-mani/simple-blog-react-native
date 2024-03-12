import React, { useReducer } from "react";

export default (redecer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(redecer, initialState);

    const boundActions = {};

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};
