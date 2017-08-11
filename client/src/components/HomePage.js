import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ListAllProjects from './ListAllProjects';
import MyProjectsPage from './MyProjectsPage'

class HomePage extends Component {
  constructor(){
    super();
    this.state = {
      users: [],
    }
  }

  componentWillMount(){
    const id = this.props.match.params.userId; 
    axios.get(`/api/user/${id}`).then(res => {
      this.setState({
        users: res.data,
      });
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>HOME PAGE</h1>
          <div>
            {this.state.users.map((user, i) => {
            return (
              <li key={i}>
                <Link to={`/user/${user._id}`}>
                  {" "}{user.username}'s Projects{" "}
                </Link>
                {user.projects}
              </li>
            )
          })}
          </div>
          <div>
            <hr />
            <Link to='/user/:userId'> My Projects </Link>
            <Link to='/add-project'> Add A Project </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;