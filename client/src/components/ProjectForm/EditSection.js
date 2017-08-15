import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddPiece from './AddPiece';
import PieceItem from '../MyProject/PieceItem';
import axios from 'axios';

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

class EditSection extends Component {

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

   componentWillMount(){
    const userId = this.props.match.params.userId; 
    const projectId = this.props.match.params.projectId; 
    const sectionId = this.props.match.params.sectionId; 
    console.log("User ID in EditProject is: " + userId);
    console.log("Project ID in EditProject is: " + projectId);
    console.log("Section ID in EditProject is: " + sectionId);
    axios.get(`/api/user/${userId}/project/${projectId}/section/${sectionId}`).then(res => {
      this.setState({
        section: {
          id: res.data._id,
          name: res.data.name,
          material: res.data.material,
          stockWidth: res.data.stockWidth,
          stockHeight: res.data.stockHeight,
          stockLength: res.data.stockLength,
          pieces: res.data.sections
        }
      });
      console.log('this.state is: (down below)')
      console.log(this.state);
    });
  }


  _handleSectionNameChange = (event) => {
    const name = event.target.value;
    const section = {...this.state.section}
    section.name = name
    this.setState({section});
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

  _handleProjectNameChange = (event) => {
    const name = event.target.value;
    const project = {...this.state.project}
    project.name = name;
    this.setState({project});
  };

  _handleSubmit = (e) => {
    const userId = this.props.match.params.userId;
    const projectId = this.props.match.params.projectId; 
    e.preventDefault();
    axios.post(`/api/user/${userId}/project/${projectId}`, this.state.section).then((res) => {
      console.log("Success!");
    })
    .catch(err => console.log(err));
  };

  _addPiece = (event) => {
    //Push a New Section to the sections array and it should appear through the mapping after setState
    
  }
  _deletePiece = (event) => {
    
  }

  render() {
    
    // const stockBoardStyle = {
    //   height: `${this.state.stockWidth}px`,
    //   width: `${this.state.stockLength}px`,
    //   border: '2px solid black'
    // }
    const sectionContainerStyle = {
      backgroundColor: 'rgba(0,0,0,0.5)',
      color: 'white'
    }
    return (
      <div>

        <div style={sectionContainerStyle}>
          <form>
              {/*Edit Section Name*/}
              <legend><h2>Edit Name: {this.state.name}</h2></legend>
              <input onChange={this._handleSectionNameChange} 
                type="text" 
                placeholder={this.state.name}
                value={this.state.name} />
              <br /><br />

              {/*Edit Section Material*/}
              <h5>Material: {this.state.material}</h5><br />
              <select onChange={this._handleMaterialChange} 
                value={this.state.material}>
                  <option>Common Board</option>
                  <option>Cedar</option>
                  <option>Select Pine</option>
              </select>

              {/*Edit Material Dimensions*/}
                <h5>Stock Material Dimensions</h5>
                <div> {this.state.stockHeight}" &times; {this.state.stockWidth}" &times; {this.state.stockLength}'</div> <br />
                Height: <input onChange={this._handleStockHeightChange}  className="dimensions-input" type="text" placeholder="height (in inches)" /> "
                &times; Width: <input onChange={this._handleStockWidthChange}  className="dimensions-input" type="text" placeholder="width (in inches)" /> "
                &times; Length: <input onChange={this._handleStockLengthChange}  className="dimensions-input" type="text" placeholder="length (in feet)" /> '<br /><br />
              
              {this.state.section.pieces.map((piece, i) => {
                return <PieceItem key={i} id={this.state.section.id} piece={piece}/>
              })}
              <Link to='/user/:userId/projects/:projectId/section/:sectionId/add-piece'>Add Another Piece</Link><br /><br />
              <button>Remove Section</button>
          </form> <br />
        </div>

      </div>
    );
  }
}

export default EditSection

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