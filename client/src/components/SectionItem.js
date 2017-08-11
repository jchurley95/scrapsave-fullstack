import React, { Component } from 'react';
import PieceItem from './PieceItem';
class SectionItem extends Component {
  render() {
    return (
      <div>
        <h3>Section: {this.props.section.name} </h3>
        <div>
            <button>Edit Section</button>
            <button>Delete Section</button>
            <hr />
        </div>
        <div>Pieces: 
          <div>
            {this.props.section.pieces.map((piece, i) => {
                return <PieceItem key={i} section={piece} 
                />
            })}
            
          </div>
        </div>
      </div>
    );
  }
}

export default SectionItem;