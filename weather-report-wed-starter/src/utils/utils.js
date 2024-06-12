// Helper function to convert Kelvin to Fahrenheit
const kelvinToFahrenheit = (kelvin) => ((kelvin - 273.15) * 9/5 + 32).toFixed(2);

// Helper function to format date strings
const formatDate = (dateString) => {
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Parse the data for use in components, 
// including the weather icon, filtering for entries at 18:00:00
const parseForecastData = (forecastData) => {

};


export { kelvinToFahrenheit, formatDate, parseForecastData };
