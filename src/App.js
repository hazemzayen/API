import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import UserList from './UserList';

function App() {
  const [listOfUsers, setListOfUsers] = useState([])
  useEffect(() => {
     axios.get("https://jsonplaceholder.typicode.com/users"
        ).then((result)=>{
          setListOfUsers(result.data)
        })
    
    
    

   
 }, []);


  return (
    <div className="App">
      <header className="App-header">
       {listOfUsers.map((user)=><UserList user={user}/>)}
       
      </header>
    </div>
  );
}

export default App;
