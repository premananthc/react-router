import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Registration from './components/registration';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Profile from './components/profile';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        < div className = "align-left">
          <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/register">Registration</Link>
              </li>
          </ul>
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Registration} />
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
