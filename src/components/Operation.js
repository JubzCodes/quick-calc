import { ACTIONS } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faXmark,
  faDivide,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

export default function OperatorButton({ dispatch, operator, icons }) {

  //fucntion to display icons for buttons
  const iconPicker = (icons) => {

    switch (icons) {

      case icons = "DIVIDE":
        return (
          <button
            onClick={() =>
              dispatch({ type: ACTIONS.CHOOSE_OPERATOR, payload: { operator } })
            }
          >
            <FontAwesomeIcon icon={faDivide}></FontAwesomeIcon>
          </button>
        );

      case icons = "MULTIPLY":
        return (
          <button
            onClick={() =>
              dispatch({ type: ACTIONS.CHOOSE_OPERATOR, payload: { operator } })
            }
          >
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
          </button>
        );

      case icons = "PLUS":
        return (
          <button
            onClick={() =>
              dispatch({ type: ACTIONS.CHOOSE_OPERATOR, payload: { operator } })
            }
          >
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </button>
        );

      case icons = "MINUS":
        return (
          <button
            onClick={() =>
              dispatch({ type: ACTIONS.CHOOSE_OPERATOR, payload: { operator } })
            }
          >
            <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
          </button>
        );

    }

  }

  return iconPicker(icons)
}
