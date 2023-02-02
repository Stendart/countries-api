
export const getCountries = (state) => state.countries.list;


export const getFilteredByRgionCountries = (state, countries) => {
  if(state.filters.region) {
    return countries.filter(country => country.region === state.filters.region)
  }
  return countries
}

export const getFilteredBySearchString = (state, countries) => {
  if(state.filters.searchString) {
    return countries.filter(country => country.name.common.includes(state.filters.searchString))
  }
  return countries
}

export const getCountriesByFifa = (state, fifas) => {
  const countriesList = [];
  fifas.forEach(fifa => {
    const country = state.countries.list.find(country => country.fifa === fifa);
    if(country) {
      countriesList.push(country);
    }
  });
  return countriesList;
}