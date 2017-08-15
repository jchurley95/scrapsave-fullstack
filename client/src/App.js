import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import navbarImage from './images/slab.jpg';
import HomePage from './components/PublicProjects/HomePage';
import MyProjectsPage from './components/MyProject/MyProjectsPage';
import ViewUser from './components/PublicProjects/ViewUser';
import NewProject from './components/ProjectForm/NewProject';
import EditProjectForm from './components/ProjectForm/EditProjectForm';


class App extends Component {

  constructor() {
    super();

    this.state = {
      currentUserId: '59926e90d44f61600f59718e',
      users: [],
      projects: []
    }
  }

  // User logs in, grabs that user's id, sets that id equal to currentUserId
  // Maybe make const components for the route components that help pass through currentUserId

  render() {
    const navbarBackgroundUrl = './images/slab.jpg';
    const navbarStyle = {
      border: '2px solid black',
      padding: '10px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      color: 'black',
      backgroundImage: 'url(' + navbarBackgroundUrl + ')'
    }

    return (
      <div className="App">
          <Router>
          <div>
            <div className="App-Navbar" style={navbarStyle}>
              <Link to='/'> Home </Link>   <h1>ScrapSave</h1> 
              <Link to={`/user/${this.state.currentUserId}`}> My Projects </Link>
            </div>
            <div>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/user/:userId' component={MyProjectsPage} />
              <Route exact path='/user/:userId/public' component={ViewUser} />
              <Route exact path='/user/:userId/add-project' component={NewProject} />
              <Route path='/user/:userId/projects/:projectId' component={EditProjectForm} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
