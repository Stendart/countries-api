import { ADD_FILTER_REGION, CHANGE_SEARCH_STRING } from "./filters-const"

const initState = {
  region: '',
  searchString: ''
}

export const filtersReduser = (state = initState, action) => {
  switch(action.type) {
    case ADD_FILTER_REGION:
      return { ...state, region: action.payload }
    case CHANGE_SEARCH_STRING:
      return { ...state, searchString: action.payload }
    default: return state
  }

}