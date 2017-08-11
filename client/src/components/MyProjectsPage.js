import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProjectItem from './ProjectItem';

class ListMyProjects extends Component {
  constructor(){
    super();
    this.state = {
      id: "",
      username: "",
      projects: []
    }
  }

  componentWillMount(){
    const id = this.props.match.params.userId; 
    axios.get(`/api/user/${id}`).then(res => {
      this.setState({
        id: res.data._id,
        username: res.data.username,
        projects: res.data.projects
      });
    });
  }

  

  render() {
    return (
      <div>
        <h1>{this.state.username}'s Projects</h1>
        <div>
            {this.state.projects.map((project, i) => {
                return <ProjectItem key={i} project={project} />
            })}
        </div>
        <div>
            <hr />
            <Link to='/'> Home </Link>
            <Link to='/add-project'> Add A Project </Link>
        </div>
      </div>
    );
  }
}

export default ListMyProjects;