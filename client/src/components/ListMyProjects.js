import React, { Component } from 'react';

class ListMyProjects extends Component {
    render() {
        return(
            <div>
                <h1>List Of My Projects</h1>
                {this.props.match.params.userId}
                console.log({this.props.match.params.userId});
            </div>
        );
    }
}

export default ListMyProjects;