import { Link } from 'react-router-dom';
import './Country.css'


export const Country = (props) => {
  const { flag, name, population, region, capital, onClick } = props;

  const clickHandler = () => {
    onClick(name.common)
  }

  return (
    <div className="country" onClick={clickHandler}>
      <img src={flag.png} className="country__flag" alt=''/>
      <div className="country__info">
        <h3 className="country__title"> { name.common } </h3>
        <div className="country__field">
          <span className="country__field-name">Population</span>
          { population }
        </div>
        <div className="country__field">
          <span className="country__field-name">Region</span>
          { region }
        </div>
        <div className="country__field">
          <span className="country__field-name">Capital</span>
          { capital }
        </div>
      </div>
    </div>
  )
}