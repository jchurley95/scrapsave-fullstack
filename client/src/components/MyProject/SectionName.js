import React, { Component } from 'react';
import PieceItem from './PieceItem';
import { Link } from 'react-router-dom';

class SectionName extends Component {

  constructor() {
    super();

    this.state = {
      section: {
        id: '',
        name: '',
        material: 'common board',
        stockWidth: 0,
        stockHeight: 0,
        stockLength: 0,
        pieces: []
      }
    }
  }



  render() {
    return (
      <div>
        <h3>{this.props.section.name}</h3>
      </div>
    );
  }
}

export default SectionName;