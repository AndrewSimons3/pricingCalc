import { combineReducers } from 'redux'

const products = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_PRODUCTS':
      return action.value;
    default:
      return state
  }
}

export default combineReducers({products})