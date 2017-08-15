import React, { Component } from 'react';
import SectionItem from './SectionItem';
import { Link } from 'react-router-dom';


class ProjectItem extends Component {
  constructor() {
    super();

    this.state = {
      project: {
        projectId: '',
        name: '(Unnamed)',
        sections: []
      }
    }
  }

  render() {
    const projectContainerStyle = {
      border: '2px solid black',
      textAlign: 'center',
      height: '300px',
      overflowY: 'scroll',
      margin: '20px',
      padding: '20px',
    }

    return (
      <div className='ProjectContainer' style={projectContainerStyle}>
        
        <div>
          <Link to={`/user/${this.props.userId}/projects/${this.props.project._id}/edit`}>
            Keep Building
          </Link>

          <br /> 
          <br /> 

          <button onClick={() => 
            this.props.deleteProject(this.props.id, this.props.project._id)}>
            Delete Project
          </button>
        </div>

        <h2>Project: {this.props.project.name} </h2>
        <div>Sections: 
          <div>
            {this.props.project.sections.map((section, i) => {
                return <SectionItem 
                  key={i} 
                  section={section} 
                  userId={this.props.userId}
                  projectId={this.state.project.projectId}
                />
            })}
          </div>
        </div>

      </div>
    );
  }
}

export default ProjectItem;