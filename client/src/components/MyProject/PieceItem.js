import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PieceItem extends Component {

  constructor() {
    super();

    this.state = {
      piece: {
        id: '',
        name: '',
        width: '',
        length: ''
      }
    }
  }
  render() {
    return (
      <div>

        <h4>Piece: {this.props.section.name} </h4>
        <div>Width: {this.props.section.width}"</div>
        <div>Length: {this.props.section.length}"</div>

        <br />

        <Link to='/user/:userId/projects/:projectId/section/:sectionId/piece/:pieceId/edit'>
          Edit Piece
        </Link>

        <br />
        <br />

        <hr />

      </div>
    );
  }
}

export default PieceItem;