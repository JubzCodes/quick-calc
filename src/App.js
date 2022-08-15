import "./app.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faXmark,
  faDivide,
  faMinus,
  faEquals,
  faDeleteLeft,
  faCalculator,
  faBan
} from "@fortawesome/free-solid-svg-icons";
import { useReducer } from "react";
import NumberButton from "./components/Number";
import OperatorButton from "./components/Operation";


const styles = { 
  gridColumn: "span 2"
}


//CALCULATOR OPTIONS
export const ACTIONS = {
  ADD_NUM: "add-num",
  CHOOSE_OPERATOR: "choose-operator",
  CLEAR: "clear",
  DELETE_NUM: "delete-num",
  EVALUATE: "evaluate",
};


//REDUCER FUNCTION
const reducer =  (state, { type, payload }) => {

  //SWITCH CASES FOR ACTIONS

  switch (type) {
    //////////////// CASE 1 ///////////////////
    // handle clear button
    case ACTIONS.CLEAR:
      return {
        ...state,
        currentOutput: "0",
      };

    //////////////// CASE 2 ///////////////////
    // add number to output
    case ACTIONS.ADD_NUM:
      // handle multiple 0's on first input
      if (payload.num === "0" && state.currentOutput === "0") {
        return state;
      }

    //////////////// CASE 3 ///////////////////
      //handle multiple .'s
      if (payload.num === "." && state.currentOutput?.includes(".")) {
        return state;
      }

    //////////////// CASE 4 ///////////////////
    case ACTIONS.CHOOSE_OPERATOR: 
    if (state.previousOutput === null) {
      return {
        ...state, 
        operator: payload.operator,
        previousOutput: state.currentOutput,
        currentOutput: null,
      }
    }

      return {
        ...state,
        currentOutput: `${state.currentOutput || " "}${payload.num}`,
      };
  }

}



function App() {

  //REDUCER STATE
  const [{ currentOutput, previousOutput, operator }, dispatch] = useReducer(reducer, {currentOutput: "0"})

  return (
    <div>
      <h1>
        Quick - Calc{" "}
        <FontAwesomeIcon
          icon={faCalculator}
          color="blue"
          flip={true}
        ></FontAwesomeIcon>
      </h1>
      <div className="grid">
        <div className="output">
          <div className="previous">{previousOutput}</div>
          <div className="current">{currentOutput}</div>
        </div>
        <button
          className="two"
          onClick={() => dispatch({ type: ACTIONS.CLEAR })}
        >
          <FontAwesomeIcon icon={faBan} size="sm"></FontAwesomeIcon>
        </button>
        <OperatorButton operator="÷" icons="DIVIDE" dispatch={dispatch} />
        <button>
          <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
        </button>
        <NumberButton num="9" dispatch={dispatch} />
        <NumberButton num="8" dispatch={dispatch} />
        <NumberButton num="7" dispatch={dispatch} />
        <OperatorButton operator="x" icons="MULTIPLY" dispatch={dispatch} />
        <NumberButton num="6" dispatch={dispatch} />
        <NumberButton num="5" dispatch={dispatch} />
        <NumberButton num="4" dispatch={dispatch} />
        <OperatorButton operator="+" icons="PLUS" dispatch={dispatch} />
        <NumberButton num="3" dispatch={dispatch} />
        <NumberButton num="2" dispatch={dispatch} />
        <NumberButton num="1" dispatch={dispatch} />
        <OperatorButton operator="-" icons="MINUS" dispatch={dispatch} />
        <NumberButton styles={styles.gridColumn} num="0" dispatch={dispatch} />
        <NumberButton num="." dispatch={dispatch} icon="true" />
        <button>
          <FontAwesomeIcon icon={faEquals} color="blue"></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
}

export default App;
