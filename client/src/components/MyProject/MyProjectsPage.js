import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProjectItem from './ProjectItem';

class MyProjectsPage extends Component {
  constructor(){
    super();
    this.state = {
      id: "",
      firstName: "",
      lastName: '',
      projects: []
    }
  }


  componentWillMount(){
    const id = this.props.match.params.userId; 
    console.log("ID is : " + id);
    axios.get(`/api/user/${id}`).then(res => {
      this.setState({
        id: res.data._id,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        projects: res.data.projects
      });
      console.log("Id is: " + res.data._id);
    });
  }

  _deleteProject = (index, projectId) => {
    console.log(projectId);
    const userId = this.props.match.params.userId;
    // const projectId = this.props.match.params.projectId;
    const projects = [...this.state.projects];
    projects.splice(index, 1);
    this.setState({projects});
    console.log("User ID is : " + userId);
    axios.delete(`/api/user/${userId}/project/${projectId}`).then(res => {
      console.log("Project ID is: " + projectId);
    });
  }

  render() {
    const myProjectsPageContainerStyle = {
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'space-around'
    }
    return (
      <div>
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <h2>My Projects</h2>
        <Link to={`/user/${this.state.id}/add-project`} 
          userId={this.state.id}> 
          New Project 
        </Link>
        <div style={myProjectsPageContainerStyle}>
            {this.state.projects.map((project, i) => {
                return <ProjectItem 
                  key={i} 
                  id={i}
                  userId={this.state.id}
                  project={project} 
                  deleteProject={this._deleteProject} />
            })}
            
        </div>
      </div>
    );
  }
}

export default MyProjectsPage;