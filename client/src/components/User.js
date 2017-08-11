import React, { Component } from 'react';
import ProjectList from './ProjectList';

class User extends Component {
    render () {
        return ( 
            <div>
                <h1>This is a user</h1>
                <p>User has projects</p>
                <div> < ProjectList /> </div>
            </div>
        )
    }
}

export default User;