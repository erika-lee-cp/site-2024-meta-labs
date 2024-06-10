import PropTypes from 'prop-types';
import './Day.css'

function Day(props) {
  return (
    <div className="day-card">
      <p>{props.day}</p>
      <img src={props.imgSrc}/>
      <p>{props.weather}</p>
      <p>{props.temperature}</p>
    </div>
  )
}

Day.propTypes = {
  day: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
};

export default Day;
