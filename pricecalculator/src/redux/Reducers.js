import { combineReducers } from 'redux'

const products = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_PRODUCTS':
      return action.value;
    default:
      return state
  }
}

const internets = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_INTERNETS':
      return action.value;
    default:
      return state
  }
}

export default combineReducers({products, internets})