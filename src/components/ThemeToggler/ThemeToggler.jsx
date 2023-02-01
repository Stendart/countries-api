import React from 'react'
import { useDispatch } from 'react-redux'
import { changeThem } from '../../store/theme-store/theme-actions';

import './ThemeToggler.css'

export const ThemeToggler = () => {
  const dispatch = useDispatch();

  const themeChangeHandler = () => {
    dispatch(changeThem());
  }

  return (
    <div className='theme-toggler'>
      <button className='theme-toggler__btn' onClick={themeChangeHandler}>
        Switch theme
      </button>  
    </div>
  )
}


// rafc - сниппет для фционального компонента