import React from "react";
import PropTypes from "prop-types";
import './Day.css'

function Day({
  day, weather, temp
}) {
  return (
    <div className="day-card">
      <p>{day}</p>
      <p>{weather}</p>
      <p>{temp}</p>
    </div>
  );
}

Day.propTypes = {
  day: PropTypes.string.isRequred,
  weather: PropTypes.string.isRequred,
  temp: PropTypes.string.optional,
};

export default Day;