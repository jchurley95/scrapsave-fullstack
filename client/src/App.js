import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/HomePage';
import Project from './components/ProjectItem';
import AddProjectForm from './components/AddProjectForm';
import ListMyProjects from './components/ListMyProjects';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
          <div>
            <div>
              <Link to='/'>Home</Link> <br />
              <Link to='/add-project'>Add A Project</Link> <br />
              <Link to='/user/:userId/my-projects'>View My Projects</Link>
            </div>
            <div>
              <Route exact path='/' components={Home} />
              <Route path='/add-projects' components={AddProjectForm} />
              <Route path='/user/:userId/my-projects' components={ListMyProjects} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
