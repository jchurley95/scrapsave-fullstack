import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddSection from './AddSection';

//Need pages to add a section and within a section add pieces 
class EditProject extends Component {

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

  _handleSubmit = (e) => {
    const userId = this.props.match.params.userId;
    const projectId = this.props.match.params.projectId; 
    e.preventDefault();
    axios.post(`/api/user/${userId}/project/${projectId}`, this.state.project).then((res) => {
      console.log("Success!");
    })
    .catch(err => console.log(err));
  };

  _handleProjectNameChange = (event) => {
    const name = event.target.value;
    const project = {...this.state.project}
    project.name = name;
    this.setState({project});
  };
  
  _addSection = (event) => {
    // const newSection = new Section;
    
    // console.log(this.state.userId);
    
    // this.setState({
    //   sections: this.state.sections.push(newSection)
    // });

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
                value={this.state.project.name}/>
            
            <br />
          <input onSubmit={this._handleSubmit} 
            type="submit" 
            value="Create" />
          </form>

        </div>
      </div>
    );
  }
}

export default EditProject