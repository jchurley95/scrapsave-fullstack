import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import ProjectItem from './ProjectItem';
import User from './User';


// I can grab res.data 
// I need to map res.data and display each user as a list
class HomePage extends Component {
  constructor(){
    super();
    this.state = {
      users: []
    }
  }

  componentWillMount(){
    axios.get(`/api/user/`)
      .then(res => {
        const users = res.data;
        this.setState(
            {users}
        );
      });
  }

  render() {

    return (
      <div>
        <div>
          <h1>HOME PAGE</h1>
        <div>

          // const allProjects = [];
          // for all users, add each project to allProjects

          // map through allProjects
          // make a Project component for each

           {this.state.users.map((user, i) => {
            return <User key={i} {...user}/>
          })}
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