import React from 'react'
import './Day.css'

function Day() {

  const temperatureClass = temperature < 60 ? "cold" : "hot";

  return (
    <div>
      <h2>{date}</h2>
      <img className="weather-icon" src={`http://openweathermap.org/img/wn/icon.png`} alt="the weather" />
      <h2 className="weather-description">the weather</h2>
      <p className={`temperature ${temperatureClass}`}>the temperature°</p>
    </div>
  )
}

export default Day
