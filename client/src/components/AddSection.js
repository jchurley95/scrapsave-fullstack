import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddPiece from './AddPiece';

// const NewSectionInput = props => {
//     const { question, answer, value } = props.question; 
//       return (
//         <div>
//           <h3> {value} </h3>
//           <label htmlFor={`${value}question`}>Question: </label>
//           <input onChange={props.changeEvent} type="text" 
//                 value={question} name={`${value}question`}
//                 points={value} type="question"
//           />
//           <br />
//           <label htmlFor={`${value}question`}>Answer: </label>
//           <input onChange={props.changeEvent} type="text"
//                 value={answer} name={`${value}question`}
//                 points={value} type="answer"
//           />
//           <br />
//         </div>
//     );
//   };

class AddSection extends Component {

  constructor() {
    super();

    this.state = {
      sectionName: '',
      material: 'common board',
      stockWidth: 0,
      stockHeight: 0,
      stockLength: 0,
      pieces: []
    }
  }

  _handleSectionNameChange = (event) => {
    const sectionName = event.target.value;
    this.setState({sectionName});
  };
  _handleMaterialChange = (event) => {
    const material = event.target.value;
    this.setState({material});
  };
  _handleStockLengthChange = (event) => {
    const stockLength = event.target.value;
    this.setState({stockLength});
  };
  _handleStockWidthChange = (event) => {
    const stockWidth = event.target.value;
    this.setState({stockWidth});
  };
  _handleStockHeightChange = (event) => {
    const stockHeight = event.target.value;
    this.setState({stockHeight});
  };

  render() {
    return (
      <div>

        <div>
          <fieldset>
              <legend><h2>Section {this.state.sectionName}</h2></legend>
              <input onChange={this._handleSectionNameChange} type="text" placeholder="New Section Name" value={this.state.sectionName} /><br /><br />
              <h5>Material: {this.state.material}</h5><br />
              <select onChange={this._handleMaterialChange} value={this.state.material}>
                  <option>Common Board</option>
                  <option>Cedar</option>
                  <option>Select Pine</option>
              </select>
                <h5>Stock Material Dimensions</h5>
                <h5> {this.state.stockHeight}" &times; {this.state.stockWidth}" &times; {this.state.stockLength}'</h5> <br />
                Height: <input onChange={this._handleStockHeightChange}  className="dimensions-input" type="text" placeholder="height (in inches)" /> "
                &times; Width: <input onChange={this._handleStockWidthChange}  className="dimensions-input" type="text" placeholder="width (in inches)" /> "
                &times; Length: <input onChange={this._handleStockLengthChange}  className="dimensions-input" type="text" placeholder="length (in feet)" /> '<br /><br />
              <AddPiece />
              <button>Add Another Piece</button><br /><br />
              <button>Remove Section</button>
          </fieldset> <br />
        </div>

      </div>
    );
  }
}

export default AddSection

// Color (optional):<br />
//               <select id="select-material">
//                   <option>Natural</option>
//                   <option>Dark Brown</option>
//                   <option>White</option>
//                   <option>Black</option>
//                   <option>Red</option>
//                   <option>Blue</option>
//                   <option>Green</option>
//               </select><br /><br />