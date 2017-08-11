import React, { Component } from 'react';

class PieceItem extends Component {
  render() {
    return (
      <div>
        <h4>Piece: {this.props.name} </h4>
        <div>Width: {this.props.width}</div>
        <div>Length: {this.props.length}</div>
      </div>
    );
  }
}

export default PieceItem;