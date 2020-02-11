import React, { Component } from 'react'
import propTypes from 'prop-types'
 class User extends Component {
    static defaultProps = {
        name : "Bilgi yok",
        surname : "Bilgi yok",
        department : "Bilgi yok",
        phone: "Bilgi yok",
        salary: "Bilgi yok"
     }
    
    render() {

        const {name, surname,department,phone, salary} =this.props

        return (
           
            
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                    <h4 className="d-inline">{name}</h4>
                    <i className="far fa-trash-alt" style={{cursor:"pointer"}}></i>

                    </div>
                    <div className="card-body">
                   <p className="card-text">surname:{surname}</p>
                   <p className="card-text">department:{department}</p>
                   <p className="card-text">phone:{phone}</p>
                   <p className="card-text">salary:{salary}</p>
                     </div>  
                </div>
               
            </div>

            
        )
    
    }
}

   

User.propTypes={
    name : propTypes.string.isRequired,
    surname : propTypes.string.isRequired,
    department :propTypes.string.isRequired
}
export default User;