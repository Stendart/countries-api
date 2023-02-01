import './Filter.css'

export const Filter = ({filterOptions = [], selectHandler}) => {
  
  return (
    <div className="filter">
      <select name="region-filter" className="filter__select" defaultValue='title' onChange={selectHandler}>
        <option value="title" disabled>filter by region</option>
        {
          filterOptions.map(filterItem => (
            <option key={filterItem} value={filterItem}>{filterItem}</option>
          ))
        }
        
      </select>
    </div>
  )
}