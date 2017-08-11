import React, { Component } from 'react';
import ListAllProjects from './ListAllProjects';
import ListMyProjects from './ListMyProjects'

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <ListAllProjects />
      </div>
    );
  }
}

export default HomePage;