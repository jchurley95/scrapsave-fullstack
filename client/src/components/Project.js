import React, { Component } from 'react';

class Project extends Component {
  render() {
    return (
      <div>
        Hello From Project
        {this.props.match.params.projectId}
      </div>
    );
  }
}

export default Project;