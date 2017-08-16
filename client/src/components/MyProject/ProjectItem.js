import React, { Component } from 'react';
import SectionName from './SectionName';
import { Link } from 'react-router-dom';
import axios from 'axios';


class ProjectItem extends Component {
  constructor() {
    super();

    this.state = {
      project: {
        projectId: '',
        name: '(Unnamed)',
        sections: [],
        projectList: [],
        stockLength: ''
      }
    }
  }

  componentWillMount(){
    const userId = this.props.userId; 
    const projectId = this.state.project._id; 
    console.log("User ID in ProjectItem is: " + userId);
    console.log("Project ID in ProjectItem is: " + projectId);
    axios.get(`/api/user/${userId}/project/${projectId}`).then(res => {
      console.log(res.data);
      this.setState({
        project: {
          projectId: res.data._id,
          name: res.data.name,
          sections: res.data.sections,
          projectList: res.data.projectList,
          stockLength: res.data.stockLength
        }
      });
      console.log('this.state is: (down below)')
      console.log(this.state);
    });
  }

  _determinePlan = () => {
    const stockLength = this.props.project.stockLength;
    const cutLengths = this.props.project.projectList;
    console.log('result of sumCutLengths is: ', this.sumCutLengths(cutLengths, stockLength));
    
    var goalBoardsNeeded = this.sumCutLengths(cutLengths, stockLength);
    var finalTotalNeeded = 0;

    for (var k = 0; k < cutLengths.length; k++) { // give as many chances as there are pieces to make it fit
        this.shuffle(cutLengths);
        if (this.testArrangement(cutLengths, stockLength) <= goalBoardsNeeded) {
            finalTotalNeeded = this.testArrangement(cutLengths, stockLength);
            break;
        } else if (k === cutLengths.length - 1) { // if no fit at the end, increment goalBoardsNeeded by 1 and start over
            goalBoardsNeeded++;
            k = 0;
        }
    }
    
    
    return finalTotalNeeded;
  }

  sumCutLengths = (array, stockLength) => {
      console.log(array);
    var sum = 0;
    for(var i=0; i< array.length; i++) {
      sum += array[i];
    }
    stockLength = this.props.project.stockLength;
    stockLength = stockLength*12;
      console.log('stockLength is', stockLength )
    var goalTotalNeeded = (sum/stockLength)

    return goalTotalNeeded;

  }

  shuffle = (array) => {
    var m = array.length, t, i;
    while(m) {
      i= Math.floor(Math.random() * m--);

      t=array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  testArrangement = (array, boardLength) => {
    var amountUsedCurrentBoard = 0;
    var totalBoardsNeeded = 1;
    for (var i = 0; i < array.length; i++) {
        if ((amountUsedCurrentBoard + array[i]) <= boardLength) {
            amountUsedCurrentBoard += array[i];
        } else {
            totalBoardsNeeded++;
            amountUsedCurrentBoard = 0;
            i--;
        }
    }

    return totalBoardsNeeded;
  }

  printCutPlan = (array, stockLength) => {
    var amountUsedCurrentBoard = 0;
    var totalBoardsNeeded = 0;
    var boardId = 1;
    for (var i = 0; i < array.length; i++) {
        if ((amountUsedCurrentBoard + array[i]) <= stockLength) {
            amountUsedCurrentBoard += array[i];
            console.log("Board " + boardId + ": " + array[i] + '"');
        } else {
            boardId++;
            console.log(" ");
            amountUsedCurrentBoard = 0;
            i--;
        }
    }
  }




  render() {
    const projectContainerStyle = {
      border: '2px solid black',
      textAlign: 'center',
      height: '300px',
      overflowY: 'scroll',
      margin: '20px',
      padding: '20px',
    }

    return (
      <div className='ProjectContainer' style={projectContainerStyle}>
        
        <div>
          <Link to={`/user/${this.props.userId}/projects/${this.props.project._id}/edit`}>
            Build
          </Link>

          <br /> 
          <br /> 

          <button onClick={() => 
            this.props.deleteProject(this.props.id, this.props.project._id)}>
            Delete Project
          </button>
        </div>

        <h2>Project: {this.props.project.name} </h2>
        <hr />
        <h3>Project List:</h3>
          {this.props.project.projectList}
        <div>Sections: 
          <div>
            {this.props.project.sections.map((section, i) => {
                return <SectionName
                  key={i} 
                  section={section} 
                  userId={this.props.userId}
                  projectId={this.state.project.projectId}
                />
            })}
          </div>
          <button onClick={this._determinePlan}>Determine Plan</button>
        </div>

      </div>
    );
  }
}

export default ProjectItem;