import "./app.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faXmark,
  faDivide,
  faMinus,
  faEquals,
  faCircle,
  faDeleteLeft,
  faCalculator
} from "@fortawesome/free-solid-svg-icons";
import { useReducer } from "react";
import NumberButton from "./components/Number";


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

    // add number to output
  switch(type) {
    case ACTIONS.ADD_NUM: 
    return {
      ...state, 
      currentOutput: `${state.currentOutput || " "}${payload.num}`
    }
  }

}



function App() {

  //REDUCER STATE
  const [{ currentOutput, previousOutput, operator }, dispatch] = useReducer(reducer, {})

  return (
    <div>
      <h1>
        Quick - Calc{" "}
        <FontAwesomeIcon icon={faCalculator} color="blue"></FontAwesomeIcon>
      </h1>
      <div className="grid">
        <div className="output">
          <div className="previous">{previousOutput}</div>
          <div className="current">{currentOutput}</div>
        </div>
        <button className="two">A/C</button>
        <button>
          <FontAwesomeIcon icon={faDivide}></FontAwesomeIcon>
        </button>
        <button>
          <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
        </button>
        <NumberButton num="9" dispatch={dispatch} />
        <NumberButton num="8" dispatch={dispatch} />
        <NumberButton num="7" dispatch={dispatch} />
        <button>
          <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
        </button>
        <NumberButton num="6" dispatch={dispatch} />
        <NumberButton num="5" dispatch={dispatch} />
        <NumberButton num="4" dispatch={dispatch} />
        <button>
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </button>
        <NumberButton num="3" dispatch={dispatch} />
        <NumberButton num="2" dispatch={dispatch} />
        <NumberButton num="1" dispatch={dispatch} />
        <button>
          <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
        </button>
        <NumberButton styles={styles.gridColumn} num="0" dispatch={dispatch} />
        <NumberButton
          num="."
          dispatch={dispatch}
          icon="true"
        />
        {/* <FontAwesomeIcon icon={faCircle} size="2xs"></FontAwesomeIcon> */}
        <button>
          <FontAwesomeIcon icon={faEquals} color="blue"></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
}

export default App;
