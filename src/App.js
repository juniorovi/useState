import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
      
    </div>
  );
}
function ExternalUsers(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[]);
  return(
    <div>
      <h2>External Useres:</h2>
      {
        users.map(user=><User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div style={{backgroundColor:'pink', padding:'5px', margin:'10px', borderRadius:'50px'}}>
      <h3>User Name: {props.name}</h3>
      <p>Email ID: {props.email}</p>
    </div>
  )
}

export default App;
