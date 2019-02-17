import React, { ComponentType, createContext, Dispatch, useReducer } from 'react';
import { Action, initialState, reducer } from '../../store';

export const stateCtx = createContext(initialState);
export const dispatchCtx = createContext((() => undefined) as Dispatch<Action>);

export const StateProvider: ComponentType = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <dispatchCtx.Provider value={dispatch}>
      <stateCtx.Provider value={state}>{children}</stateCtx.Provider>
    </dispatchCtx.Provider>
  );
};
