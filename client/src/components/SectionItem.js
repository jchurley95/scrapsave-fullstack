import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    return (
      <div>
        <h2>An Individual Project</h2>
        <div>Project: {this.props.name} </div>
        <div>Sections: </div>
      </div>
    );
  }
}

export default ProjectItem;