import React, { Component } from 'react';
import './App.css';
import Home from '../component/Home'
import Login from './Login/Login'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Register from '../component/Register'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Router>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />


        </Router>
         
      </header>
      </div>
    );
  }
}

export default App;
