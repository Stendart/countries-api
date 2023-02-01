import { useNavigate } from "react-router-dom";

import { Country } from "../Country/Country";

import './CountriesList.css'

export const CountriesList = ({countries}) => {
  const navigate = useNavigate();

  const selectCountryHandler = (name) => {
    navigate(`/country/${name}`);
  }

  return (
    <div className="countries-list">
      {
        countries.map(country => 
          <div className="countries-list__item" key={country.name.common}>
            <Country 
              flag={country.flags} 
              name={country.name} 
              population={country.population} 
              region={country.region} 
              capital={country.capital}
              onClick={selectCountryHandler}
            />
          </div>
        )
      }
    </div>
  )
}