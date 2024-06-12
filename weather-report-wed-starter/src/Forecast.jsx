import React from 'react';
import Day from './Day';
import './Forecast.css';

import { parseForecastData } from './utils/utils';

function Forecast({ city, data }) {


  return (
  <>
    <p>📍 Location: {city ? city : ""}</p>
    <div className="forecast-container">
    
    </div>
  </>
  );

}

export default Forecast;

