import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Routes, Route, Link } from "react-router-dom";

import { THEME_COLOR_MAP } from './store/theme-store/theme-reduser';
import { loadCountries } from './store/countries-store/countries-actions';
import { Main } from './Pages/Main';
import { ThemeToggler } from './components/ThemeToggler/ThemeToggler';
import { SelectCountry } from './Pages/SelectCountry/SelectCountry';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.color)

  useEffect(() => {
    dispatch(loadCountries())
  }, [])

  return (
    <div className="App">
      <header className={"App__header " + (theme === THEME_COLOR_MAP.dark ? 'App__header--dark' : 'App__header--white')}> 
        <div className='App__header-wrapper'>
          <p>
          <Link to='/'>
            Main
          </Link> 
            
          </p>
          <ThemeToggler />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/country/:name" element={<SelectCountry />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
