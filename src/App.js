
import './App.css';
import React, {Component} from 'react';
import Navbar from './componets/Navbar';
import Users from './componets/Users';





class App  extends Component {
  
   
  render(){



  return (

    
    <div className="App">
      <div className="container">
      
         <Navbar title="User App" />
         <hr/>

         <Users/>
      
     
      </div>

      </div>
    
   
  );
}
}


export default App;
