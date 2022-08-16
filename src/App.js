import "./app.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEquals,
  faDeleteLeft,
  faCalculator,
  faBan,
} from "@fortawesome/free-solid-svg-icons";
import { useReducer } from "react";
import NumberButton from "./components/Number";
import OperatorButton from "./components/Operation";
import { reducer } from "./Reducer";

const styles = {
  gridColumn: "span 2",
};

//CALCULATOR OPTIONS
export const ACTIONS = {
  ADD_NUM: "add-num",
  CHOOSE_OPERATOR: "choose-operator",
  CLEAR: "clear",
  DELETE_NUM: "delete-num",
  EVALUATE: "evaluate",
};

//EVALUATE FUNCTION
export const evaluate = ({ currentOutput, previousOutput, operator }) => {

  //change outputs to strings
  const current = parseFloat(currentOutput);
  const previous = parseFloat(previousOutput);

  //check if inptuts are numebrs
  if (isNaN(previous) || isNaN(current)) return "";

  let value = ""

  switch(operator) {

    case "+": 
      value = previous + current
      break; 

    case "-": 
      value = previous - current
      break;
    
    case "x":
      value = previous * current
      break; 

    case "÷":
      //handle user dividing by 0
      if (current === 0) {
      return value = "Error"
      }
      value = previous / current
      break;

  }

  return value.toString()

}

//formatter with no fractions
const formatter = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
})

//format function
const formatOutput = (output) => {

  if (output == null) {
    return;
  }

  // split output into 2 variables
  const [number, decimal] = output.split('.');

  //handle format if theres no decimal
  if (decimal == null) {
    return formatter.format(number);
  }

  //handle format with decimal
  return `${formatter.format(number)}.${decimal}`;

}

function App() {

  //REDUCER STATE
  const [{ currentOutput, previousOutput, operator }, dispatch] = useReducer(
    reducer,
    {}
  );

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
          <div className="previous">
            {formatOutput(previousOutput)}
            {operator}
          </div>
          <div className="current">{currentOutput ? formatOutput(currentOutput) : "0"}</div>
        </div>
        <button
          className="two"
          onClick={() => dispatch({ type: ACTIONS.CLEAR })}
        >
          <FontAwesomeIcon icon={faBan} color="red" size="sm"></FontAwesomeIcon>
        </button>
        <button onClick={() => dispatch({ type: ACTIONS.DELETE_NUM })}>
          <FontAwesomeIcon
            onClick={() => dispatch({ type: ACTIONS.CLEAR })}
            icon={faDeleteLeft}
          ></FontAwesomeIcon>
        </button>
        <OperatorButton operator="÷" icons="DIVIDE" dispatch={dispatch} />
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
        <button onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>
          <FontAwesomeIcon icon={faEquals}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
}

export default App;
