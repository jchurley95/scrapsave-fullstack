import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddSection from './AddSection';
import { withRouter } from 'react-router-dom';

//Need pages to add a section and within a section add pieces 
class NewProject extends Component {

  constructor() {
    super();

    this.state = {
      project: {
        name: '',
        sections: []
      }
    }

    // this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit = (e, history) => {
    //setInterval
    const id = this.props.match.params.userId; 
    e.preventDefault();
    axios.post(`/api/user/${id}/project`, this.state.project)
      .then((res) => {
        console.log("Success!");
        console.log("userId from params is: " + this.props.match.params.userId);
        this.props.history.push(`/user/${this.props.match.userId}`)
      })
      // .then((res) => {
        
      // })
      .catch(err => console.log(err));
  };

  _handleProjectNameChange = (event) => {
    const name = event.target.value;
    const project = {...this.state.project}
    project.name = name;
    this.setState({project});
  };
  
  _addSection = (event) => {
    const newSection = AddSection;
    console.log(this.state.userId);
    
    this.setState({
      sections: this.state.sections.push(newSection)
    });

  }

  _addPiece = (event) => {
    //Push a New Section to the sections array and it should appear through the mapping after setState
    
  }

  render() {
    const buildProjectContainer = {
     display: 'flex',
     flexDirection: 'column'
    }
    return (
      <div>

        <div style={buildProjectContainer}>
          <h1>Build: {this.state.project.name}</h1>
          
          <form onSubmit={this._handleSubmit}>

            <input type="text"
                onChange={this._handleProjectNameChange} 
                placeholder="Project Name" 
                value={this.state.project.name}
            />
            
            <br />

            <button 
              onClick={this._handleSubmit} 
              type="submit" 
              value="Create">
              Create New Project
            </button>
            
          </form>

        </div>
      </div>
    );
  }
}

export default withRouter(NewProject)