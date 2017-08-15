import React, { Component } from 'react';
import PieceItem from './PieceItem';
import { Link } from 'react-router-dom';

class SectionItem extends Component {

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
        <h3>Section: {this.props.section.name} </h3>
        <Link 
          to={`/user/${this.props.userId}/projects/${this.state.projectid}/section/${this.state.id}/edit`}
        >
          Edit Section
        </Link>

        <br /> 
        <br />

        <div>

            <hr />
        </div>
        <div>
          <h3>Pieces:</h3>
          <div>
            {this.props.section.pieces.map((piece, i) => {
                return 
                  <PieceItem 
                    key={i} 
                    section={piece} 

                  />
            })}
            
          </div>
        </div>
      </div>
    );
  }
}

export default SectionItem;