import './App.css';
import CurrentWeather from './components/CurrentWeather'
import {
  BrowserRouter as Router, Route,
  } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route exact path="/current-weather" component={CurrentWeather}></Route>
        </header>
      </div>
      
    </Router>
  );
}

export default App;
