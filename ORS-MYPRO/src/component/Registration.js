import React from "react";
import withRouter from "../componet2/withRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import axios from "axios";

import { Component } from "react";
class RegistrationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
      id: "",
      name: "",
      email: "",
      password: "",
     
    };
    if (this.props.params.pid) {
      this.get();
    }
  }
  // get() {
  //   let id = this.props.params.pid;
  //   axios
  //     .get("http://localhost:8080/get/" + id)
  //     .then((res) => {
  //       this.setState({
  //         firstName: res.data.result.data.firstName,
  //         lastName: res.data.result.data.lastName,
  //         email: res.data.result.data.email,
  //         password: res.data.result.data.password,
  //         roleId: res.data.result.data.roleId,
  //         id: res.data.result.data.id,
  //       });
  //     })
  //     .catch((err) => {
  //       this.setState({ error: err.message });
  //     });
  // }
  componentDidMount() {
    axios
      .post("http://api.sunilos.com:9080/ORSP10/Role/search", this.state)
      .then((res) => {
        this.setState({ list: res.data.result.data });
      });
  }
  save() {
    let url = "http://localhost:3308/empRegisteration/save";
    axios.post(url, this.state)
     .then((res) => {
     console.log(res.data);

      this.setState({ list: res.data.result });
     

    })

  
  }
  resetForm = () => {
    this.setState({
        id: "",
      name: "",
      email: "",
      password: "",
      error: "",
      inputError: {
        id: "",
      name: "",
      email: "",
      password: "",
      error: "",
        
      },
    });
  };
  mouseEnter = (e) => {
    this.setState({ roleId: e.target.value });
  };
  render() {
   
    return (
      <>
        
        <div align="center" className="Auth-registration-container">
          
          <Form className="Auth-form-login">
           
            <table className="Auth-form-content">
              <div className="form-group mt-3">
                <label>Id</label>
                <input
                  className="form-control mt-1"
                  name="id"
                  type="text"
                  onChange={(event) =>
                    this.setState({ id: event.target.value })
                  }
                  value={this.state.id}
                  placeholder="Enter Emp ID"
                  required
                />
              </div>
             
              <div className="form-group mt-3">
                <label>Name</label>
                <input
                  className="form-control mt-1"
                  name="name"
                  type="text"
                  onChange={(event) =>
                    this.setState({ name: event.target.value })
                  }
                  value={this.state.name}
                  placeholder="Enter Name"
                  required
                />
              </div>
              
             
              <div className="form-group mt-3">
                <label>Email </label>
                <input
                  className="form-control mt-1"
                  name="email"
                  value={this.state.email}
                  placeholder="Enter Email Id"
                  onChange={(event) =>
                    this.setState({ email: event.target.value })
                  }
                  required
                />
                
              </div>
              <div></div>
              <div className="form-group mt-3">
                <label> Password </label>

                <input
                  className="form-control mt-1"
                  name="password"
                  type={"password"}
                  value={this.state.password}
                  onChange={(event) =>
                    this.setState({ password: event.target.value })
                  }
                  placeholder="Enter Password"
                  required
                />
                
              </div>
              
              
              <br></br>
              <div>
                <Button type="button" onClick={(event) => this.save(event)}>
                  {this.props.params.pid ? "Update" : "Save"}
                </Button>
                &nbsp; &nbsp;
                <Button
                  type="reset"
                  variant="danger"
                  onClick={(event) => this.resetForm(event)}
                >
                  Reset
                </Button>
              </div>
            </table>
            <br></br>
          </Form>
        </div>
      </>
    );
  }
}
export default withRouter(RegistrationPage);