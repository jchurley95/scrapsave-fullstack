import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    return (
      <div>
        <h2>An Individual Project</h2>
        {this.props.match.params.projectId}
      </div>
    );
  }
}

export default ProjectItem;