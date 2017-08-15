import React, { Component } from 'react';

class PublicPieceItem extends Component {
  render() {
    return (
      <div>
        <h4>Piece: {this.props.section.name} </h4>
        <div>Width: {this.props.section.width}"</div>
        <div>Length: {this.props.section.length}"</div>
        <hr />
      </div>
    );
  }
}

export default PublicPieceItem;