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
    axios.get(`/api/user/${id}`).then(res => {
      this.setState({
        id: res.data._id,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        projects: res.data.projects
      });
      console.log(res.data);
    });
  }

  

  render() {
    return (
      <div>
        <h1>{this.state.firstName} {this.state.lastName}'s Projects</h1>
        <div>
            {this.state.projects.map((project, i) => {
                return <ProjectItem key={i} project={project} 
                />
            })}
        </div>
        <div>
            <hr />
            <Link to='/'> Home </Link> <br />
            <Link to='/add-project'> New Project </Link>
        </div>
      </div>
    );
  }
}

export default MyProjectsPage;