import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProjectItem from './ProjectItem';

class HomePage extends Component {
  constructor(){
    super();
    this.state = {
      users: [],
      projects: []
    }
  }

  componentWillMount(){
    const id = this.props.match.params.userId; 
    axios.get(`/api/user/`).then(res => {
      this.setState({
        users: res.data,
      }); 
    });
    console.log(this.state.users);
  }

  render() {
    return (
      <div>
        <div>
          <h1>HOME PAGE</h1>
          <div>
            {/* {this.state.users.projects.map((project, i) => {
                return <ProjectItem key={i} project={project} 
                />
            })} */}
        </div>
          <div>
            <hr />
            <Link to='/user/:userId'> My Projects </Link> <br />
            <Link to='/add-project'> New Project </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;