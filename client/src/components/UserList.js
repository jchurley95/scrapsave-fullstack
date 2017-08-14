 import React, {Component} from 'react';
 import User from './User';
 
 class UserList extends Component {
   render() {

     const userComponents = users.map((user, i) => {
       return <User key={i} user={user}/>;
     });
 
     return (
 
         <div>
           { userComponents }
         </div>
     );
   }
 }
 
 export default UserList;