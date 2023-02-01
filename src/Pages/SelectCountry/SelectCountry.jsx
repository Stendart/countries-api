import React, { usrState, useEffect, useState } from 'react'
import { useSearchParams, useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { loadDetailByName } from '../../api/countries-api';
import { getCountriesByFifa } from '../../store/countries-store/countries-selectors';
import './SelectCountry.css'

export const SelectCountry = (/*{name, area, capital, flag, region, startOfWeek, population}*/) => {
  const [countryInfo, setCountryInfo] = useState();
  const { name: selectCountryName } = useParams();

  useEffect(() => {
    loadDetailByName(selectCountryName).then(country => {
      setCountryInfo(country[0])
    })
  }, []);

  const neighbors = useSelector(state => getCountriesByFifa(state, countryInfo?.borders || []));

  const navigate = useNavigate();

  if (!countryInfo) {
    return 'Loading...'
  }

  const {name, area, capital, flags, region, languages, population, borders} = countryInfo;
  const parsedLanguages = Object.entries(languages);

  

  const neighborsClickHsndler = (countryName) => {
    
    // ToDo разобраться с переключением роутов
    navigate(countryName)

    // navigate(-1) - для возврата по истоии

  }
  console.log('neighbors', neighbors);

  return (
    <div className="select-country">
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
            return  <button key={neighbor?.name.common} 
                            className="select-country__neighbors-item"
                            onClick={() => neighborsClickHsndler(neighbor?.name.common)}>
                      {neighbor?.name.common}
                    </button>
            
          })
        }
      </div>
    </div>
  )
}
