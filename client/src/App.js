import './App.css';
import CurrentWeather from './components/currentWeather'
import {
  BrowserRouter as Router, Route,
  } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        
        </header>
      </div>
      <Route exact path="/current-weather" component={CurrentWeather}></Route>
    </Router>
  );
}

export default App;
