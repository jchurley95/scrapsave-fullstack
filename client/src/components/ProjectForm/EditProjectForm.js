import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddSection from './AddSection';
import SectionItem from '../MyProject/SectionItem';

//Need pages to add a section and within a section add pieces 
class EditProject extends Component {

  constructor() {
    super();

    this.state = {
      project: {
        id: '',
        name: '',
        sections: []
      }
    }

    // this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentWillMount(){
    const userId = this.props.match.params.userId; 
    const projectId = this.props.match.params.projectId; 
    console.log("User ID in EditProject is: " + userId);
    console.log("Project ID in EditProject is: " + projectId);
    axios.get(`/api/user/${userId}/project/${projectId}`).then(res => {
      console.log(res.data);
      this.setState({
        project: {
          id: res.data._id,
          name: res.data.name,
          sections: res.data.sections
        }
      });
      console.log('this.state for EditProjectForm is: (down below)')
      console.log(this.state);
    });
  }

  _handleSubmit = (e) => {
    const userId = this.props.match.params.userId;
    const projectId = this.props.match.params.projectId; 
    e.preventDefault();
    axios.post(`/api/user/${userId}/project/${projectId}`, this.state.project).then((res) => {
      this.setState({
        project: {
          id: res.data._id,
          name: res.data.name,
          sections: res.data.sections
        }
      });
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
    const newSection = AddSection;
    
    this.setState({
      sections: this.state.sections.push(newSection)
    });

  }
  _deleteSection = (event) =>  {

  }
  _addPiece = (event) => {
    //Push a New Section to the sections array and it should appear through the mapping after setState
    
  }
  _deletePiece = (event) => {
    
  }

  render() {
    const buildProjectContainer = {
     display: 'flex',
     flexDirection: 'column'
    }
    return (
      <div>
        <div style={buildProjectContainer}>

          <form onSubmit={this._handleSubmit}>

            <h1>Edit: {this.state.project.name}</h1>

            {/* Form Submit Button to UPDATE PROJECT  */}
            <input onSubmit={this._handleSubmit} 
            type="submit" 
            value="Update Project" />

            <br />
            <br />

            {/* Edit Project Name */}
            <input type="text"
              onChange={this._handleProjectNameChange} 
              placeholder="Project Name" 
              value={this.state.project.name}/>

            <br />
            <br />

            {/* Link to ADD A SECTION  */}
            <Link to={`/user/${this.props.match.params.userId}/projects/${this.props.match.params.userId}/add-section`}>Add A Section</Link><br /><br />

            {/* Show this project's sections */}
            {this.state.project.sections.map((section, i) => {
              return <SectionItem 
                        key={i} 
                        userId={this.props.match.params.userId}
                        projectId={this.state.project.id} 
                        section={section}
                      />
            })}

          </form>
        </div>
      </div>
    );
  }
}

export default EditProject