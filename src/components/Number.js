import { ACTIONS } from "../App"

export default function NumberButton({ dispatch, num }) {
  return <button onClick={()=> dispatch({ type: ACTIONS.ADD_NUM, payload: { num}})}></button>
}