import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddSection from './AddSection';

//Need pages to add a section and within a section add pieces 
class NewProjectPage extends Component {

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
    const id = this.props.match.params.userId; 
    e.preventDefault();
    axios.post(`/api/user/${id}/project`, this.state.project).then((res) => {
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
    const newSection = <AddSection />;
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
            Project Name:<br />
            <input type="text"
                onChange={this._handleProjectNameChange} 
                placeholder="Project Name" 
                value={this.state.project.name}/>
            
            <br /><br />

          <AddSection />
          <hr />
          {/* <button onClick={this._addSection} >Add Another Section </button><br />  */}

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

export default NewProjectPage