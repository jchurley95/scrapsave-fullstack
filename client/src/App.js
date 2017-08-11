import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import HomePage from './components/HomePage';
import MyProjectsPage from './components/MyProjectsPage';
import AddProjectPage from './components/AddProjectPage';


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

  _getUsers = () => {
    axios.get('/api/users')
      .then((res) => {
        const users = res.users;
        this.setState({ users });
      })
  }

  render() {

    return (
      <div className="App">
          <Router>
          <div>
            <div className="Navbar">
              <Link to='/'> Home </Link>
              <Link to='/user/:userId'> My Projects </Link>
              <Link to='/add-project'> New Project </Link>
              <hr />
            </div>
            <div>
              <Route exact path='/' component={HomePage} />
              <Route path='/user/:userId' component={MyProjectsPage} />
              <Route path='/add-project' component={AddProjectPage} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
