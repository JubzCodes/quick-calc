import { ACTIONS } from "../App"

export default function NumberButton({ dispatch, num, styles }) {
  return <button className={`${styles ? "two" : ""}`}  onClick={()=> dispatch({ type: ACTIONS.ADD_NUM, payload: { num}})}> {num}</button>
}