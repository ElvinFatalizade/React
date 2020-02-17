import React, {Component} from 'react';
import './App.css';
import Navbar from './componets/Navbar';
import Users from './componets/Users';
import AddUser from './componets/AddUser';





class App  extends Component {
  
   
  render(){



  return (

    
    <div className="App">
      <div className="container">
      
         <Navbar title="User App" />

       <AddUser/>
         <hr/>

         <Users/>
      
     
      </div>

      </div>
    
   
  );
}
}


export default App;
