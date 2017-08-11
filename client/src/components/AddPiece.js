import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Need pages to add a section and within a section add pieces 
class AddPiece extends Component {
  render() {
    return (
      <div>

        <div>
          <h4>New Piece</h4>
          <form>
            Piece Name:<br />
            <input type="text" placeholder="New Piece Name" /><br /><br />
            <h4>Piece Dimensions</h4>
            &times; Width: <input className="dimensions-input" type="text" placeholder="width (in inches)" /> "
            &times; Length: <input className="dimensions-input" type="text" placeholder="length (in feet)" /> '
        </form>

        </div>

      </div>
    );
  }
}

export default AddPiece