import React, { Component } from 'react';
//Need pages to add a section and within a section add pieces 

// const NewPieceInput = props => {
//     const { piece, name, width, length } = props.piece; 
//       return (
//         <div>
//           <h4>New Piece</h4>
//           <form>
//             Piece Name:<br />
//             <input type="text" placeholder="New Piece Name" value={name}/><br /><br />
//             <h4>Piece Dimensions</h4>
//             &times; Width: <input className="dimensions-input" type="text" placeholder="width (in inches)" /> "
//             &times; Length: <input className="dimensions-input" type="text" placeholder="length (in feet)" /> '
//         </form>
//         </div>
//     );
//   };

class AddPiece extends Component {

    constructor() {
        super();

        this.state = {
            piece: {
                pieceName: '',
                pieceWidth: 0,
                pieceLength: 0
            }
        }
    }

    _handlePieceNameChange = (event) => {
        const pieceName = event.target.value;
        this.setState({pieceName});
    };
    _handlePieceWidthChange = (event) => {
        const pieceWidth = event.target.value;
        this.setState({pieceWidth});
    };
    _handlePieceLengthChange = (event) => {
        const pieceLength = event.target.value;
        this.setState({pieceLength});
    };

    render() {
        return (
        <div>

            <div>
            <fieldset>
                
                <legend>Piece {this.state.pieceName}</legend>
                <h5>Piece Name:</h5>
                <input onChange={this._handlePieceNameChange} type="text" placeholder="New Piece Name" value={this.state.pieceName}/><br /><br />
                <h5>Piece Dimensions</h5>
                <h5>{this.state.pieceWidth}" &times; {this.state.pieceLength}"</h5>
                Width: <input onChange={this._handlePieceWidthChange} className="dimensions-input" type="text" placeholder="(in inches)" /> "
                &times; Length: <input onChange={this._handlePieceLengthChange} className="dimensions-input" type="text" placeholder="(in inches)"/> "
                
                <br />
                <button>Remove Piece</button>
                </fieldset>
                

            </div>

        </div>
        );
  }
}

export default AddPiece