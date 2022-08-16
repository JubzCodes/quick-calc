import { ACTIONS } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faXmark,
  faDivide,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

export default function OperatorButton({ dispatch, operator, icons }) {

  // console.log(operator , "in button")

  const iconPicker = (icons) => {

    switch (icons) {

      case icons = "DIVIDE":
        return (<button>
          <FontAwesomeIcon icon={faDivide}></FontAwesomeIcon>;
          </button>)

      case icons = "MULTIPLY":
        return <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>;

      case icons = "PLUS":
        return <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>;

      case icons = "MINUS":
        return <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>;

    }

  }

  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATOR, payload: {operator} })
      }
    >
      {operator}
    </button>
  );
}
