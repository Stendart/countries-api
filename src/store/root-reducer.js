import { combineReducers } from "redux";
import { countryReduser } from "./countries-store/countries-reduser";
import { filtersReduser } from "./filters-store/filters-reduser";
import { themeReducer } from "./theme-store/theme-reduser";


export const rootReducer = combineReducers({
  countries: countryReduser,
  filters: filtersReduser,
  theme: themeReducer
})