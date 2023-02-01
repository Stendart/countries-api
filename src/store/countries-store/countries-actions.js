import { ADD_COUNTRIES } from "./countries-const"

import { loadData } from "../../api/countries-api"

const addCountries = (payload) => {
  return {
    type: ADD_COUNTRIES,
    payload
  }
}

export const loadCountries = () => (dispatch) =>{
  loadData()
    .then(data => {
      dispatch(addCountries(data));
    })
    .catch(err => {
      console.error(err);
    })
}