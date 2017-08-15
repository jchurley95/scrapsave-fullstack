import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import HomeIcon from './images/home-icon.ico';
import BuildIcon from './images/tools-icon.png';
import HomePage from './components/PublicProjects/HomePage';
import MyProjectsPage from './components/MyProject/MyProjectsPage';
import ViewUser from './components/PublicProjects/ViewUser';
import NewProject from './components/ProjectForm/NewProject';
import EditProjectForm from './components/ProjectForm/EditProjectForm';
import AddSection from './components/ProjectForm/AddSection';
import AddPiece from './components/ProjectForm/AddPiece';
import EditSection from './components/ProjectForm/EditSection';
import EditPiece from './components/ProjectForm/EditPiece';



class App extends Component {

  constructor() {
    super();

    this.state = {
      currentUserId: '5993040c0f61ef84146d8376',
      users: [],
      projects: []
    }
  }

  // User logs in, grabs that user's id, sets that id equal to currentUserId
  // Maybe make const components for the route components that help pass through currentUserId

  render() {
    const navbarStyle = {
      border: '2px solid black',
      padding: '10px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',

    }
    const iconStyle = {
      height: '50px',
      width: '50px'
    }
    return (
      <div className="App">
          <Router>
          <div>
            <div className="App-Navbar" style={navbarStyle}>
              <Link to='/'> 
                <img style={iconStyle} src={HomeIcon} />HOME 
              </Link>   
              <h1>ScrapSave</h1> 
              <Link to={`/user/${this.state.currentUserId}`}>
                <img style={iconStyle} src={BuildIcon} />MY DIY
              </Link>
            </div>
            <div>

              <Route exact path='/' component={HomePage} />
              <Route exact path='/user/:userId' component={MyProjectsPage} />
              <Route exact path='/user/:userId/public' component={ViewUser} />

              <Route exact path='/user/:userId/add-project' component={NewProject} />
              <Route exact path='/user/:userId/projects/:projectId/add-section' component={AddSection} />
              <Route exact path='/user/:userId/projects/:projectId/section/:sectionId/add-piece' component={AddPiece} />

              <Route exact path='/user/:userId/projects/:projectId/edit' component={EditProjectForm} />
              <Route exact path='/user/:userId/projects/:projectId/section/:sectionId/edit' component={EditSection} />
              <Route exact path='/user/:userId/projects/:projectId/section/:sectionId/piece/:pieceId/edit' component={EditPiece} />
              
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
