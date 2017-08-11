 import React, {Component} from 'react';
 import User from './User';
 
 class UserList extends Component {
   render() {
 
     const users = [
       {title: 'A Movie', rating: 'PG-13', description: 'this is a movie'},
       {title: 'Another Movie', rating: 'R', description: 'this is another movie'},
     ];
 
     const userComponents = users.map((user) => {
       return <User />;
     });
 
     return (
 
         <div>
           { userComponents }
         </div>
     );
   }
 }
 
 export default UserList;