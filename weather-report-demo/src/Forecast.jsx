import './Forecast.css'
import Day from './Day';

function Forecast() {
  return (
      <div id="forecast">
        <Day
          day="Thu, Mar 14"
          weather="Clouds"
          imgSrc=""
          />
        <Day
          day="Thu, Mar 15"
          weather="Rain"
          imgSrc=""
          temperature="67.34"
          />
        <Day
          day="Thu, Mar 16"
          weather="Clouds"
          imgSrc=""
          temperature="55.34"
          />
      </div>
  )
}

export default Forecast;
