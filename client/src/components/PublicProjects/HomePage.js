import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import User from './User';
import PublicProjectItem from './PublicProjectItem';



// I can grab res.data 
// I need to map res.data and display each user as a list
class HomePage extends Component {
  constructor(){
    super();
    this.state = {
      users: [],
      allProjects: []
    }
  }

  componentWillMount(){
    
    axios.get(`/api/user/`)
      .then(res => {
        const users = res.data;
        const allProjects = [];
        for(var i = 0; i < users.length; i++) {
          console.log("Users[i].projects.length is: " + users[i].projects.length);
          for(var k = 0; k < users[i].projects.length; k++) {
            const project = users[i].projects[k];
            console.log("Project is: " + project);
            allProjects.push(project);
            console.log("allProjects is: " + allProjects);
          }
        }
        this.setState(
            {users, allProjects}
        );
        console.log(this.state.allProjects);
      });

  }



  render() {
    const homePageLayout = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around'
    }
    const publicProjectStyle = {
      height: '400px',
      width: '400px',
    }
    const borderStyle = {
      border: '2px solid black'
    }
    return (
      <div>
          <h1>Home</h1>
            <div style={homePageLayout}>

              <div>
                  <h2>DIY'ers:</h2>
                  <div>
                    {this.state.users.map((user, i) => {
                      return <User key={i} {...user}/>
                    })}
                  </div>
              </div>

              <div>
                <div style={publicProjectStyle}>
                  <h2>Browse Projects:</h2>
                  {this.state.allProjects.map((project, i) => {
                    return <PublicProjectItem  
                            key={i} 
                            project={project}
                            />
                  })}
                </div>
              </div>

          </div>
      </div>
    );
  }
}

export default HomePage;