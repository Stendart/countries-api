
import { ADD_COUNTRIES } from "./countries-const"

const initState = {
  list: [],
  status: 'idle'
}


export const countryReduser = (state = initState, action) => {
  switch(action.type) {
    case ADD_COUNTRIES:
      return { ...state, list: action.payload }
    default: return state
  }

}