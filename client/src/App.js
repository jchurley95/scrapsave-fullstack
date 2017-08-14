import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import HomePage from './components/HomePage';
import MyProjectsPage from './components/MyProjectsPage';
import NewProjectPage from './components/NewProjectPage';


class App extends Component {

  constructor() {
    super();

    this.state = {
      currentUser: {
        userName: 'JCHurley95',
      },
      users: [],
      projects: []
    }
  }

  render() {

    return (
      <div className="App">
          <Router>
          <div>
            <div className="Navbar">
            | - <Link to='/'> Home </Link> - | -
              <Link to='/user/:userId'> My Projects </Link> - | -
              <Link to='/user/:userId/add-project'> New Project </Link> - |
              <hr />
            </div>
            <div>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/user/:userId' component={MyProjectsPage} />
              <Route exact path='/user/:userId/add-project' component={NewProjectPage} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
