import React from "react";

export const CTX = React.createContext();
const initState = {
  general: [
    { from: "Bill", msg: "hello" },
    { from: "George", msg: "hello" },
    { from: "Bill", msg: "hello again" }
  ],
  topic2: [
    { from: "Ann", msg: "hello" },
    { from: "George", msg: "hello" },
    { from: "Bill", msg: "hello hello" }
  ]
};

function reducer(state, action) {
  const { from, msg, topic } = action.payload;
  switch (action.type) {
    case "RECEIVE_MESSAGE":
      return {
        ...state,
        [topic]: [...state[topic], { from, msg }]
      };

    default:
      return state;
  }
}

export default function Store(props) {
  const reducerHook = React.useReducer(reducer, initState);

  return <CTX.Provider value={reducerHook}>{props.children}</CTX.Provider>;
}
