import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Project from './components/Project';
import AddProject from './components/AddProject';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
          <div>
            <div>
              <Link to='/'>Home</Link> <br />
              <Link to='/add-project'>Add A Project</Link>
            </div>
            <div>
              <Route exact path='/' components={Home} />
              <Route path='/add-projects' components={AddProject} />
              <Route path='/projcet/:projectId' components={Project} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
