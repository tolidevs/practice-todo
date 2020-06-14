import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Page404 from './components/404'
import Home from './components/Home'
import NavBar from './components/NavBar'


function App() {
  return (
    <div className="App">
      <NavBar />

      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </Router>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
