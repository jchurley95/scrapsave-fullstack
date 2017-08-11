import React, { Component } from 'react';
import SectionItem from './SectionItem';
import axios from 'axios';

class ProjectItem extends Component {
  constructor() {
    super();

    this.state = {
      name: '(Unnamed)',
      sections: []
    }
  }

  render() {
    return (
      <div>
        <h2>Project: {this.props.project.name} </h2>
        <div>
          <button>Edit Project</button>
          <button>Delete Project</button><br /><br />
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