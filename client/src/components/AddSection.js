import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddSection extends Component {
  render() {
    return (
      <div>

        <div>
          <h3>New Section</h3>
          <form>
            Section Name:<br />
            <input type="text" placeholder="New Section Name" /><br /><br />
            Material:<br />
              <select id="select-material">
                  <option>Common Board</option>
                  <option>Cedar</option>
                  <option>Select Pine</option>
              </select><br /><br />
                <h4>Stock Material Dimensions</h4>
                Height: <input className="dimensions-input" type="text" placeholder="height (in inches)" /> "
                &times; Width: <input className="dimensions-input" type="text" placeholder="width (in inches)" /> "
                &times; Length: <input className="dimensions-input" type="text" placeholder="length (in feet)" /> '
          </form>

        </div>

      </div>
    );
  }
}

export default AddSection