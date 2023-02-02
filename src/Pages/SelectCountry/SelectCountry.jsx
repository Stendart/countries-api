import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { THEME_COLOR_MAP } from '../../store/theme-store/theme-reduser';

import { loadDetailByName } from '../../api/countries-api';
import { getCountriesByFifa } from '../../store/countries-store/countries-selectors';
import './SelectCountry.css'

export const SelectCountry = () => {
  const [countryInfo, setCountryInfo] = useState();
  const { name: selectCountryName } = useParams();
  const theme = useSelector(state => state.theme.color)

  useEffect(() => {
    loadDetailByName(selectCountryName).then(country => {
      setCountryInfo(country[0])
    })
  }, [selectCountryName]);

  const neighbors = useSelector(state => getCountriesByFifa(state, countryInfo?.borders || []));
  const navigate = useNavigate();

  if (!countryInfo) {
    return 'Loading...'
  }

  const {name, area, capital, flags, region, languages, population, borders} = countryInfo;
  const parsedLanguages = Object.entries(languages);

  const neighborsClickHandler = (countryName) => {
    navigate(`/country/${countryName}`);
  }

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div className={"select-country " + 
      (theme === THEME_COLOR_MAP.white ? 'select-country__white' : 'select-country__dark')
    }>
      <button className="select-country__nav-btn" onClick={goBack}> {'<= Back'}</button>
      <div className="select-country__wrapper">
        <img src={flags.png} className="select-country__flag" alt=''/>
        <div className="select-country__info">
          <h3 className="select-country__title"> { name.common } </h3>
          <div className="select-country__field">
            <span className="select-country__field-name">Population </span>
            { population }
          </div>
          <div className="select-country__field">
            <span className="select-country__field-name">Region </span>
            { region }
          </div>
          <div className="select-country__field">
            <span className="select-country__field-name">Capital </span>
            { capital }
          </div>
          <div className="select-country__languages-wrapper">
            <p className="select-country__field-name ">
              Languages: 
            </p> 
            <ul className="select-country__languages">
              {
                parsedLanguages.map((language) => (
                  <li key={language[0]}>{language[1]}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="select-country__neighbors">
        {
          neighbors.map(neighbor => {
            return  <button key={neighbor.name.common} 
                            className="select-country__neighbors-item"
                            onClick={() => neighborsClickHandler(neighbor.name.common)}>
                      {neighbor.name.common}
                    </button>
            
          })
        }
      </div>
    </div>
  )
}
