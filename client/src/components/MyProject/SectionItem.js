import React, { Component } from 'react';
import PieceItem from './PieceItem';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

  componentWillMount(){
    const userId = this.props.userId; 
    const projectId = this.props.projectId; 
    const sectionId = this.props.section._id;
    console.log("User ID in SectionItem is: " + userId);
    console.log("Project ID in SectionItem is: " + projectId);
    axios.get(`/api/user/${userId}/project/${projectId}/section/${sectionId}`).then(res => {
      console.log(res.data);
      this.setState({
        section: {
        id: res.data.id,
        name: res.data.name,
        material: res.data.material,
        stockWidth: res.data.stockWidth,
        stockHeight: res.data.stockHeight,
        stockLength: res.data.stockLength,
        pieces: res.data.pieces
      }
      });
      console.log('this.state for SectionItem is: (down below)')
      console.log(this.state);
    });
  }


  render() {
    return (
      <div>
        <h3>Section: {this.props.section.name} </h3>
        <Link 
          to={`/user/${this.props.userId}/projects/${this.props.projectId}/section/${this.props.section._id}/edit`}
        >
          Edit Section
        </Link>

        <br /> 
        <br />

        <div>
          <h3>Pieces:</h3>
          <div>
            {this.props.section.pieces.map((piece, i) => {
              return 
                <PieceItem 
                  key={i} 
                  section={piece}
                   
                  sectionId={this.props.section._id}
                />
            })}
            
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default SectionItem;