import { ACTIONS } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faXmark,
  faDivide,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

export default function OperatorButton({ dispatch, operator, icons }) {

  const iconPicker = (icons) => {

    switch (icons) {

      case icons = "DIVIDE":
        return <FontAwesomeIcon icon={faDivide}></FontAwesomeIcon>;

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
      onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATOR, payload: { operator } })}
    >
      {iconPicker(icons)}
    </button>
  );
}
