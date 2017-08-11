import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Need pages to add a section and within a section add pieces 
class AddProjectPage extends Component {
  render() {
    return (
      <div>

        <div>
          <h1>Add A Project</h1>
          <form>
            Project Name:<br />
            <input type="text" placeholder="Project Name" /><br /><br />
            
          </form>

        </div>

        <div>
          <hr />
          <Link to='/user/:userId'> My Projects </Link> <br />
          <Link to='/'> Home </Link>
        </div>
      </div>
    );
  }
}

export default AddProjectPage