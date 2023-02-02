import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { getCountries } from "../store/countries-store/countries-selectors";
import { THEME_COLOR_MAP } from '../store/theme-store/theme-reduser';

import { addFilterRegion, changeSearchString } from '../store/filters-store/filters-actions';
import { getFilteredByRgionCountries, getFilteredBySearchString } from '../store/countries-store/countries-selectors';
import { CountriesList } from '../components/CountriesList/CountriesList';
import { Search } from '../components/Search/Search';
import { Filter } from '../components/Filter/Filter';

export const Main = () => {
  const dispatch = useDispatch();
  const countries = useSelector(getCountries);
  const theme = useSelector(state => state.theme.color)
  const [allRegions, setAllRegions] = useState(new Set());

  const filteredByRgionCountries = useSelector((state) => getFilteredByRgionCountries(state, countries));
  const filteredBySearchString = useSelector((state) => getFilteredBySearchString(state, filteredByRgionCountries));

  const selectHandler = (e) => {
    dispatch(addFilterRegion(e.target.value));
  }

  const inputHandler = (e) => {
    dispatch(changeSearchString(e.target.value))
  }

  useEffect(()=>{
    setAllRegions(new Set(countries.map(country => country.region)))
  }, [countries])

  return (
    <main className={'App__main ' + (theme === THEME_COLOR_MAP.dark ? 'App--dark' : 'App--white')}>
      <div className='App__tools-wrapper'>
        <div className='App__search'>
          <Search inputHandler={inputHandler}/>
        </div>
        <div className='App__filter'>
          <Filter filterOptions={[...allRegions]} selectHandler={selectHandler} />
        </div>
      </div>
      
      <div className='App__countries-list'>
        <CountriesList countries={filteredBySearchString}/>
      </div>
    </main> 
  )
}
