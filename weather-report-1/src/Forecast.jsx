import React from "react";
import './Forecast.css'
import Day from "./Day";

function Forecast() {
  return (
    <div id="forecast">
      <Day
        day="Thurs, Jun 12"
        weather="rainy"
        temp="85F"/>
      <Day
        day="Thurs, Jun 12"
        weather="rainy"
        temp="85F"/>        
    </div>
  );
}


export default Forecast;