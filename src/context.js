import React, {Component} from 'react'



const UserContext = React.createContext();
const reducer = (state,action) => {

    switch(action.type){
        case "DELETEUSER":
            return {
                ...state,
                users: state.users.filter(user => action.payload !== user.Id )
            }
            default:
                return state
    }
}
// Provider, Consumer
export  class UserProvider extends Component {
  state={
        users: [
          {
            Id:1,
            name: "Elvin Fatalizade",
            salary: "1500",
            department: "IT"
          },
          {
            Id:2,
            name: "Gunay Ceferzade",
            salary: "1500",
            department: "IT"
          },
          {
            Id:3,
            name: "Rusdam Mammadov",
            salary: "1500",
            department: "IT"
          }
        ],
        dispatch : action =>{

        this.setState(state => reducer(state,action))

        }
      }
    
    render() {
        return (
           <UserContext.Provider value = {this.state}>
            {this.props.children}
           </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;

