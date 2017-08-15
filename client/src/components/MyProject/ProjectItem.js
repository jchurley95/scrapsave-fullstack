import React, { Component } from 'react';
import SectionItem from './SectionItem';
import { Link } from 'react-router-dom';

class ProjectItem extends Component {
  constructor() {
    super();

    this.state = {
      name: '(Unnamed)',
      sections: []
    }
  }

  render() {
    const projectContainerStyle = {
      border: '2px solid black',
      textAlign: 'center',
      height: '300px',
      overflowY: 'scroll',
      margin: '20px',
      padding: '20px'
    }
    return (
      <div style={projectContainerStyle}>
        <h2>Project: {this.props.project.name} </h2>
        <div>
          <Link to={`/user/${this.state.id}/add-project`}><button>Keep Building</button></Link>
          <button onClick={() => this.props.deleteProject(this.props.id)}>
            Delete</button>
        </div>
        <div>Sections: 
          <div>
            {this.props.project.sections.map((section, i) => {
                return <SectionItem key={i} section={section} 
                />
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectItem;