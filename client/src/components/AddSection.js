import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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