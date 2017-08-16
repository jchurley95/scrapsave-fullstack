import React, { Component } from 'react';
import PublicSectionItem from './PublicSectionItem';

class PublicProjectItem extends Component {
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
      <div className="ProjectContainer" style={projectContainerStyle}>
        <h2>Project: {this.props.project.name} </h2>
        <hr />
        <div>Sections: 
          <div>
            {this.props.project.sections.map((section, i) => {
                return <PublicSectionItem key={i} section={section} 
                />
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default PublicProjectItem;