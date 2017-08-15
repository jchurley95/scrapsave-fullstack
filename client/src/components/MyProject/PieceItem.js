import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PieceItem extends Component {

  constructor() {
    super();

    this.state = {
      piece: {
        id: '',
        name: 'Unnamed',
        width: 0,
        length: 0
      }
    }
  }

  componentWillMount(){
    const userId = this.props.userId; 
    const projectId = this.props.projectId; 
    const sectionId = this.props.sectionId;
    const pieceId = this.props.piece._id;
    console.log("User ID in SectionItem is: " + userId);
    console.log("Project ID in SectionItem is: " + projectId);
    console.log("Section ID in SectionItem is: " + sectionId);
    console.log("Piece ID in SectionItem is: " + pieceId);
    axios.get(`/api/user/${userId}/project/${projectId}/section/${sectionId}/piece/${pieceId}`).then(res => {
      console.log(res.data);
      this.setState({
        piece: {
          id: res.data.id,
          name: res.data.name,
          width: res.data.width,
          length: res.data.length
        }
      });
      console.log('this.state for PieceItem is: (down below)')
      console.log(this.state);
    });
  }

  render() {
    return (
      <div>

        <h4>Piece: {this.props.section.name} </h4>
        <div>Width: {this.props.section.width}"</div>
        <div>Length: {this.props.section.length}"</div>

        <br />

        <Link to='/user/:userId/projects/:projectId/section/:sectionId/piece/:pieceId/edit'>
          Edit Piece
        </Link>

        <br />
        <br />

        <hr />

      </div>
    );
  }
}

export default PieceItem;