import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddProjectPage extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Form For Adding A Project</h1>
        </div>
        <div>
          <hr />
          <Link to='/user/:userId'> My Projects </Link>
          <Link to='/'> Home </Link>
        </div>
      </div>
    );
  }
}

export default AddProjectPage