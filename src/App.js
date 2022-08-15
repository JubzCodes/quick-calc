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
      currentOutput: `${currentOutput}${payload.num}`
    }
  }

}



function App() {

  //REDUCER STATE
  const [{ currentOutput, previousOoutput, operator }, dispatch] = useReducer(reducer)

  return (
    <div>
      <h1>
        Quick  - Calc <FontAwesomeIcon icon={faCalculator} color="blue"></FontAwesomeIcon>
      </h1>
      <div className="grid">
        <div className="output">
          <div className="previous">1,400</div>
          <div className="current">1,400</div>
        </div>
        <button className="two">A/C</button>
        <button>
          <FontAwesomeIcon icon={faDivide}></FontAwesomeIcon>
        </button>
        <button>
          <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
        </button>
        <button>9</button>
        <button>8</button>
        <button>7</button>
        <button>
          <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
        </button>
        <button>6</button>
        <button>5</button>
        <button>4</button>
        <button>
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </button>
        <button>3</button>
        <button>2</button>
        <button>1</button>
        <button>
          <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
        </button>
        <button className="two">0</button>
        <button>
          <FontAwesomeIcon icon={faCircle} size="2xs"></FontAwesomeIcon>
        </button>
        <button>
          <FontAwesomeIcon icon={faEquals} color="blue"></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
}

export default App;
