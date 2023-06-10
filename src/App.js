import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './redux/features/userSlice';

function App() {


  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");



  const userList = useSelector((state) => state.users.value)
  const dispatch = useDispatch()

 
  return (
    <div className="App">
      
      <div className='adduser'>
        <input type="text" placeholder='Name...' onChange={(event) => {setName(event.target.value)}}></input>
        <input type="text" placeholder='Username...' onChange={(event) => {setUserName(event.target.value)}}></input>
        <button onClick={() => {

          dispatch( addUser( {id: userList[userList.length - 1].id + 1 , name, userName} ) )

          }}>Add User</button>
          <button onClick={() => {
            dispatch()
          }}>Delete User</button>

          asflmdsam fsa.fsafas

          lasmşfsa


          
      </div>
    </div>
  );
}

export default App;
