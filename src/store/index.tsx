import {
  createContext, useContext, useReducer,
} from 'react';

// createContext requires a `defaultValue` and in our case,
// it is whatever the useReducer() hook returns;
const StateContext = createContext<any>([]);

type StateProviderProp = {
  reducer: any;
  initialState: any;
  children: any;
}

// App/Root needs a reference to the StateProvider
export const StateProvider = ({ reducer, initialState, children } : StateProviderProp) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Consumer needs a reference to the Global Context
export const useStateValue = () => useContext(StateContext);
