import { CHANGE_THEME } from "./theme-const"

export const THEME_COLOR_MAP = {
  white: 'white',
  dark: 'dark'
}

const initState = {
  color: THEME_COLOR_MAP.white
}


export const themeReducer = (state=initState, action) => {
  switch(action.type) {
    case CHANGE_THEME:
      const nextColor = state.color === THEME_COLOR_MAP.white 
        ? THEME_COLOR_MAP.dark 
        : THEME_COLOR_MAP.white
      return { ...state, color: nextColor }
    default: return state
  }
}