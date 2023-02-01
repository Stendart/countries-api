import { ADD_FILTER_REGION, CHANGE_SEARCH_STRING } from "./filters-const"

export const addFilterRegion = (region) => {
  return {
    type: ADD_FILTER_REGION,
    payload: region
  }
}

export const changeSearchString = (searchString) => {
  return {
    type: CHANGE_SEARCH_STRING,
    payload: searchString
  }
}