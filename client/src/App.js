import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/HomePage';
import ListMyProjects from './components/ListMyProjects';
import AddProjectForm from './components/AddProjectForm';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
          <div>
            <div>
              <Link to='/'>Home</Link> <br />
              <Link to='/add-project'>Add A Project</Link> <br />
            </div>
            <div>
              <Route exact path='/' components={Home} />
              <Route path='/user/:userId' components={ListMyProjects} />
              <Route path='/add-projects' components={AddProjectForm} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
