import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import axios from 'axios';

class User extends Component {

    
    render () {
        // const projectComponents = {this.state.projects}.map((user, i) => {
        //     return <ProjectItem key={i} user={user}/>;
        // });
        return ( 
            <div>
                <h1>{this.props.firstName} {this.props.lastName}</h1>
            </div>
        )
    }
}

export default User;