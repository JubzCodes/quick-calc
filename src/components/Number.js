import { ACTIONS } from "../App"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle
} from "@fortawesome/free-solid-svg-icons";

export default function NumberButton({ dispatch, num, styles, icon }) {

  // console.log(num)

  return <button className={`${styles ? "two" : ""}`}  onClick={()=> dispatch({ type: ACTIONS.ADD_NUM, payload: {num}})}> {num && icon? (<FontAwesomeIcon icon={faCircle} size="2xs"></FontAwesomeIcon>
) : (num)}</button>
}