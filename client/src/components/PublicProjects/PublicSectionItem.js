import React, { Component } from 'react';
import PublicPieceItem from './PublicPieceItem';

class PublicSectionItem extends Component {
  render() {
    return (
      <div>
        <h3>Section: {this.props.section.name} </h3>
        <div>
            <hr />
        </div>
        <div>Pieces: 
          <div>
            {this.props.section.pieces.map((piece, i) => {
                return <PublicPieceItem key={i} section={piece} 
                />
            })}
            
          </div>
        </div>
      </div>
    );
  }
}

export default PublicSectionItem;