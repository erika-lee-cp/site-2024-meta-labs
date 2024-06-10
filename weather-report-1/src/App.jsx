import './App.css'
import Forecast from './Forecast';
import SearchForm from './SearchForm';

function App() {

  return (
    <>
      <div id="main">
        <h1>Weather Report</h1>
        <SearchForm/>
        <Forecast/>
      </div>
    </>
  )
}

export default App;
