import React, { Component } from 'react'
import propTypes from 'prop-types'
import UserConsumer from '../context';

 class User extends Component {
 state={

     isvisible:false
 }

    static defaultProps = {
        name : "Bilgi yok",
        surname : "Bilgi yok",
        department : "Bilgi yok",
        phone: "Bilgi yok",
        salary: "Bilgi yok"
     }
    // constructor(props){
    //     super (props);

    //     this.state ={
    //        isvisible:false
    //     }
    // }
// onClickEvent =(e)=>{
// // console.log(e.target);
// // console.log("test");
// console.log(this)

// }
//    ikinci numune

//  onClickEvent =(number,e)=>{
//   console.log(number)
//  }
// isvisible true etmek

onClickEvent=(e)=>{

    this.setState({

        isvisible:!this.state.isvisible
    })
}

OnDeleteUser=(dispatch,e) => {
 const {id} = this.props;
 dispatch({type:"DELETEUSER", payload:id});
}

    render() {

        const {name, surname,department,phone, salary} =this.props
        const {isvisible}=this.state;
  
        return(
            <UserConsumer>
        {
           value =>{
               const{dispatch} = value;

             return(
           
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                    <h4 className="d-inline"onClick={this.onClickEvent} style={{cursor:"pointer"}} >{name}</h4>
                    <i onClick ={this.OnDeleteUser.bind(this, dispatch)} className="far fa-trash-alt" style={{cursor:"pointer"}}></i>

                    </div>
                    {
                        isvisible ? <div className="card-body">
                        <p className="card-text">surname:{surname}</p>
                        <p className="card-text">department:{department}</p>
                        <p className="card-text">phone:{phone}</p>
                        <p className="card-text">salary:{salary}</p>
                         
                          </div>:null
                    }
                    
                </div>
               
            </div>
            
        )



           } 
        }

            </UserConsumer>
        )
       
    
    }
}  

User.propTypes={
    name : propTypes.string.isRequired,
    surname : propTypes.string.isRequired,
    department :propTypes.string.isRequired
}
export default User;