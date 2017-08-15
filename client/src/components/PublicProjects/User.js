import React, { Component } from 'react';
import ProjectItem from '../MyProject/ProjectItem';
import { Link } from 'react-router-dom';

class User extends Component {

    
    render () {
        // const projectComponents = {this.state.projects}.map((user, i) => {
        //     return <ProjectItem key={i} user={user}/>;
        // });
        return ( 
            <div>
                <Link to={`user/${this.props._id}/public`} className='User-Index-Link'>
                    <h1>{this.props.firstName} {this.props.lastName}</h1>
                </Link>

            </div>
        )
    }
}

export default User;