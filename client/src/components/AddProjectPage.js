import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//Need pages to add a section and within a section add pieces 
class AddProjectPage extends Component {

  _handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/user", this.state).then((res) => {
      console.log("Success!");
    })
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div>

        <div>
          <h1>Add A Project</h1>
          <form onSubmit={this._handleSubmit}>
            Project Name:<br />
            <input type="text" placeholder="Project Name" /><br /><br />
            
          </form>

          Material:<br />
              <select id="select-material">
                  <option>Common Board</option>
                  <option>Cedar</option>
                  <option>Select Pine</option>
              </select><br /><br />
          
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