import './App.css';
import { Navbar,Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import Loader from './Components/Loader'
import UserCards from './Components/UserCards'


function App() {

  const [loader,setLoader] = useState(false);
  const [userData,setUserData] = useState([]);

  const handleClick = () => {
    setLoader(true);
    axios
        .get("https://reqres.in/api/users?page=1")
        .then((response) => {
            console.log(response.data.data);
            setUserData(response.data.data);
            setTimeout(function(){ setLoader(false); }, 500);
            
        })
        .catch((error) => {
            console.log(error);
        });
  }


  return (
    <div className="App">
     
      <header>
        <Navbar className="nav" bg="light" variant="light">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://seeklogo.com/images/G/gmail-icon-logo-9ADB17D3F3-seeklogo.com.png"
              width="40"
              height="40"
              className="d-inline-block align-center"
            />{' '}
            EMAIL
          </Navbar.Brand>
          <Button className="nav-btn" variant="primary" onClick={handleClick}>Get Users</Button>
        </Navbar>
      </header>

      {loader?(<Loader />):<UserCards users={userData}/>}

      

      
      
    </div>
  );
}

export default App;
