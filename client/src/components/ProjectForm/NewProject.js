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
        projectList: []
      }
    }
  }

  _handleSubmit = () => {
    const id = this.props.match.params.userId; 
    axios.post(`/api/user/${id}/project`, this.state.project)
      .then((res) => {
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
  _handleProjectListChange = (event) => {
    const projectList = event.target.value;
    const project = {...this.state.project}
    project.projectList = projectList;
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

    const handleClick = (e, history) => {
    e.preventDefault();
    const id = this.props.match.params.userId; 
    console.log("userId from params is: " + id);
    this.props.history.push(`/user/${id}`)
    this._handleSubmit();
    }

    return (
      <div>

        <div style={buildProjectContainer}>
          
          <form onSubmit={this._handleSubmit}>
            <fieldset>
            <legend><h1>Build New Project:</h1></legend>
            <label>{this.state.project.name}</label>
            <br />
            <input type="text"
                onChange={this._handleProjectNameChange} 
                placeholder="Project Name" 
                value={this.state.project.name}
            />
            <br />
            <label>{this.state.project.projectList}</label>
            <br />
            <input type="text"
                onChange={this._handleProjectListChange} 
                placeholder="Project List" 
                value={this.state.project.projectList}
            />
            
            <br />

            <button 
              onClick={handleClick} 
              type="submit" 
              >Create New Project</button>
            
            </fieldset>
          </form>

        </div>
      </div>
    );
  }
}

export default withRouter(NewProject)