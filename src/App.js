import React from 'react';

import './App.css';
import Navbar from './componets/Navbar';
import User from './componets/User';


function App() {
  return (
    <div className="App">
      <div className="container">
       
         <Navbar />
         <hr/>

         <User
         
         name ="Elvin"
         surname="Fatalizade"
         department="IT"
         phone="0505005702"
         salary="1500azn"
         />

         <User
         name ="Gunay"
         surname="Ceferade"
         department="Desinger"
         phone="0505005003"
         salary="1000azn"
         
         />
         
 
      </div>

     

      
      
      </div>
    
   
  );
}

export default App;
