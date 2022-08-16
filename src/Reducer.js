import { ACTIONS
 } from "./App";
 import { evaluate } from "./App";


//REDUCER FUNCTION
export const reducer = (state, { type, payload }) => {
  //SWITCH CASES FOR ACTIONS

  switch (type) {
    //////////////// CASE 1 ///////////////////
    // handle clear button
    case ACTIONS.CLEAR:
      return {
        ...state,
        currentOutput: null,
        previousOutput: null,
        operator: null,
      };

    //////////////// CASE 2 ///////////////////
    // add number to output
    case ACTIONS.ADD_NUM:
      //handle overwrite of current output after evauluation
      if (state.overwrite) {
        return {
          ...state,
          currentOutput: payload.num,
          overwrite: false,
        };
      }

      // handle multiple 0's on first input
      if (payload.num === "0" && state.currentOutput === "0") {
        return state;
      }

      //handle multiple .'s
      if (payload.num === "." && state.currentOutput?.includes(".")) {
        return state;
      }

      //handle output
      return {
        ...state,
        currentOutput: `${state.currentOutput || " "}${payload.num}`,
      };

    //////////////// CASE 3 ///////////////////
    case ACTIONS.CHOOSE_OPERATOR:
      //handle empty output on operator click
      if (state.currentOutput == null && state.previousOutput == null) {
        return state;
      }

      //handle operator switch
      if (state.currentOutput == null) {
        return {
          ...state,
          operator: payload.operator,
        };
      }

      //handle previous output push on operator click
      if (state.previousOutput == null) {
        return {
          ...state,
          operator: payload.operator,
          previousOutput: `${state.currentOutput || " "}`,
          currentOutput: null,
        };
      }

      //handle evaluation during calculations
      return {
        ...state,
        operator: payload.operator,
        previousOutput: evaluate(state),
        currentOutput: null,
      };

    //////////////// CASE 4 ///////////////////
    case ACTIONS.EVALUATE:
      //handle no output when equal is pressed when outputs are empty
      if (
        state.currentOutput == null ||
        state.previousOutput == null ||
        state.operator == null
      ) {
        return state;
      }

      //handle equal button
      return {
        ...state,
        overwrite: true,
        operator: null,
        previousOutput: null,
        currentOutput: evaluate(state),
      };

    //////////////// CASE 5 ///////////////////
    case ACTIONS.DELETE_NUM:
      //handle delete when overwrite is true
      if (state.overwrite) {
        return {
          ...state,
          currentOutput: null,
          overwrite: false,
        };
      }

      //handle delete when output is null
      if (state.currentOutput == null) {
        return state;
      }

      //handle delete when theres 1 number in output
      if (state.currentOutput.length === 1) {
        return {
          ...state,
          currentOutput: null,
        };
      }

      //handle delete action
      return {
        ...state,
        currentOutput: state.currentOutput.slice(0, -1),
      };
  }
};
