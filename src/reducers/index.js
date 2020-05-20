import {combineReducers} from "redux";

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.amount
    case 'DECREMENT':
      return state - action.amount
    case 'MULTIPLY':
      return state * action.amount
      case 'DIVISION':
      return state % action.amount //reducer kısmı : action dan gelen veriyi dispacth edip store'da belirtilen verinin güncellenmesini sağlar
    default:
      return state
  }
}

export default combineReducers({
  counter
})
