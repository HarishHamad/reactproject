import React,{Component} from "react";
import { Form, Button } from "react-bootstrap";
// import BaseCtrl from "./BaseCtrl";
import axios from "axios";
import withRouter from "../componet2/withRouter";
// import DashBoard from "./DashBoard";
import ReactDOM from "react-dom";

import App1 from "./App1";
// import FormMessage from "./FormMessage";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
     
    };
  }
  signIn() {
    axios
      .post("http://localhost:3308/au/loginPage/", this.state)
      .then((res) => {
        console.log(res);
        this.setState({ list: res.data.result });
        console.log(res.data);

        if (res.data) {
          console.log(res.data)
          return ReactDOM.render(
            <React.StrictMode>
              
              <App1/>
            </React.StrictMode>,
            document.getElementById("root")
          );
         
        }   
      })
   
  }
  resetForm = () => {
  
  };

  render() {
    return (
      <>
        <div align="center" className="Auth-form-container">
          <h2 align="center">LogIn</h2>
          <Form className="Auth-form-login">
            <table className="Auth-form-content" style={{ marginTop:"50px"}}>
              <div>
                
                
                <h2 style={{ color: "red" }}>
                  {" "}
                  
                </h2>
                <h2 style={{ color: "red" }}> {this.state.error}</h2>
              </div>
              <div className="form-group mt-3">
                <label>email</label>
                <input
                  className="form-control mt-1"
                  placeholder="Enter Login Id"
                  name="email"
                  onChange={(event) =>
                    this.setState({ email: event.target.value })
                  }
                  value={this.state.email}
                  required
                />

              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  className="form-control mt-1"
                  placeholder="Enter Password"
                  name="password"
                  type={"password"}
                  onChange={(event) =>
                    this.setState({ password: event.target.value })
                  }
                  value={this.state.password}
                  required
                />
              
              </div>

              <div className="form-group mt-3">
                <Button
                  type="button"
                  onClick={() => this.signIn()}

                >
                  SignIn
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
export default withRouter(Login);