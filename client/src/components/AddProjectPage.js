import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddPiece from './AddPiece';
import AddSection from './AddSection';

//Need pages to add a section and within a section add pieces 
class AddProjectPage extends Component {

  constructor() {
    super();

    this.state = {
      userId: "",
      projectName: '',
      sections: []
    }
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/user", this.state).then((res) => {
      console.log("Success!");
    })
    .catch(err => console.log(err));
  };

  _addSection = (event) => {
    const newSection = <div><AddSection /></div>;
    console.log(this.state.userId);
    this.state.sections.push(newSection);
    this.setState();

  }
  _addPiece = (event) => {
    //Push a New Section to the sections array and it should appear through the mapping after setState
    
  }
  _handleProjectNameChange = (event) => {
    const projectName = event.target.value;

    this.setState({projectName});
  };

  render() {
    return (
      <div>

        <div>
          <h1>Build: {this.state.projectName}</h1>
          
          <form onSubmit={this._handleSubmit}>
            Project Name:<br />
            <input onChange={this._handleProjectNameChange} type="text" placeholder="Project Name" value={this.state.projectName}/><br /><br />

          <AddSection />
          <hr />
          <button onClick={this._addSection} >Add Another Section </button><br /> 

          <input onSubmit={this._handleSubmit} type="submit" value="Submit Project" />
          </form>
          <button>Cancel</button>

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