import React, { Component } from 'react'
import posed from 'react-pose';

const Box = posed.div({
    visible: { opacity: 1, 
    applyAtStart:{display: "block"}
    },
    hidden: { opacity: 0,
      applyAtEnd:{display:"none"}
    }
  });
class AddUser extends Component {
  state ={
    visible: false 
  }
  changeVisible=(e) =>{
    this.setState({
      visible: !this.state.visible
    })
  }
    render() {

      const {visible} =this.state
        return (
            <div className="col-md-8 mb-4">
            <button onClick={this.changeVisible} className="btn btn-dark btn-block mb-2">{visible ? "Hide Show" : "Show Form"}</button>

         <Box  pose={visible ? 'visible' : 'hidden'}>
          <div className="card">
              <div className="card-header">
                  <h4>Add User Form</h4>
              </div>

              <div className="card-body">
              <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="id" placeholder="Enter Name" className="form-control"></input>
                  </div>
              </form>
          </div>
          <div className="card-body">
              <form>
                  <div className="form-group">
                    <label htmlFor="surname">Surname</label>
                    <input type="text" name="surname" id="id" placeholder="Enter surname" className="form-control"></input>
                  </div>
              </form>
          </div>
          <div className="card-body">
              <form>
                  <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <input type="text" name="department" id="id" placeholder="Enter department" className="form-control"></input>
                  </div>
              </form>
          </div>
          <div className="card-body">
              <form>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" id="id" placeholder="Enter phone" className="form-control"></input>
                  </div>
              </form>
          </div>
          <div className="card-body">
              <form>
                  <div className="form-group">
                    <label htmlFor="surnsalaryame">Salary</label>
                    <input type="text" name="surnsalaryame" id="id" placeholder="Enter salary" className="form-control"></input>
                  </div>
              </form>
          </div>
          <button className="btn btn-success btn-block" type="submit">Create</button>
          </div>
          </Box>
        
        </div>
        )
    }
}
export default AddUser;
