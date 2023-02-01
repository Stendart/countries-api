import './Search.css'

export const Search = ({inputHandler}) => {
  
  return (
    <div className="search">
      <input type="search" className="search__input" onInput={inputHandler}/>
    </div>
  )
}