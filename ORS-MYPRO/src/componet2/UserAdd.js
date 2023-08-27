import axios from "axios";
import React, { Component } from "react";
import withRouter from "./withRouter";
import "../App.css";

class UserAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      id: "",
      name: "",
      email: "",
      password: "",
    };
    if (this.props.params.id) {
      this.get();
    }
  }

  get() {
    let id = this.props.params.id;
    var url = "http://localhost:3308/empEdit/search/" + id;

    axios.get(url).then((res) => {
      console.log(res);
      this.setState({
        id: res.data.list[0].id,
        name: res.data.list[0].name,
        email: res.data.list[0].email,
        password: res.data.list[0].password,
      });
    });
  }

  submit() {
    let url = "http://localhost:3308/empRegisteration/save";
    axios.post(url, this.state).then((res) => {
      console.log(res.data);
      this.setState({ list: res.data.result });
      
    });
  }
  update() {
    var id = this.props.params.id;
    let url = "http://localhost:3308/empSave/update/" + id;
    axios.put(url, this.state).then((response) => {
      this.setState({ list: response });
    });
  }
  reset() {
    this.setState({
      id: "",
      name: "",
      email: "",
      password: "",
    });
  }
  render() {
    return (
      <div className="bg">
        <section className="mt-3">
          <div className="mask d-flex align-items-center h-50 gradient-custom-3">
            <div className="container h-50 ">
              <div className="row d-flex justify-content-center align-items-center h-50">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div
                    className="card p-5"
                    style={{
                      borderRadius: "30px",
                      marginTop:"90px",
                      width: "80%",
                    }}
                  >
                    <h1 className=" d-flex justify-content-center align-items-center">
                      {this.props.params.id ? "EDIT USER" : "ADD USER"}
                    </h1>
                    <div className="card-body ">
                      <form>
                        <table>
                          <tr className="form-outline mb24">
                            <td
                              className="form-label"
                              htmlFor="form3Example2cg"
                            >
                              id
                            </td>
                            <td>
                              <input
                                type="text"
                                id="form3Example2cg"
                                className="form-control form-control-lg"
                                onChange={(event) => {
                                  this.setState({ id: event.target.value });
                                }}
                                name="id"
                                value={this.state.id}
                                required
                                placeholder="Enter id"
                              />
                            </td>
                          </tr>
                          <tr className="form-outline mb-2">
                            <td
                              className="form-label"
                              htmlFor="form3Example1cg"
                            >
                              name
                            </td>
                            <td>
                              <input
                                type="text"
                                id="form3Example1cg"
                                className="form-control form-control-lg"
                                onChange={(event) => {
                                  this.setState({ name: event.target.value });
                                }}
                                name="name"
                                value={this.state.name}
                                placeholder="Enter name"
                              />
                            </td>
                          </tr>

                          <tr className="form-outline mb-2">
                            <td
                              className="form-label"
                              htmlFor="form3Example3cg"
                            >
                              email
                            </td>
                            <td>
                              <input
                                type="email"
                                id="form3Example3cg"
                                className="form-control form-control-lg"
                                onChange={(event) => {
                                  this.setState({ email: event.target.value });
                                }}
                                name="email"
                                value={this.state.email}
                                required
                                placeholder="Enter email id"
                              />
                            </td>
                          </tr>
                          <tr className="form-outline mb-2">
                            <td
                              className="form-label"
                              htmlFor="form3Example4cg"
                            >
                              Password
                            </td>
                            <td>
                              <input
                                type="password"
                                id="form3Example4cg"
                                className="form-control form-control-lg"
                                onChange={(event) => {
                                  this.setState({
                                    password: event.target.value,
                                  });
                                }}
                                name="password"
                                value={this.state.password}
                                placeholder="Enter password"
                              />
                            </td>
                          </tr>

                          <br />

                          <tr className="text-center">
                            <td colSpan={3}>
                              {this.props.params.id ? 
                                <button
                                  type="btn"
                                  className="btn btn-success btn-block btn-lg gradient-custom-4 text-body "
                                  onClick={(event) => {
                                    this.update(event);
                                  }}
                                >
                                  update
                                </button>
                               : 
                                <button
                                  type="btn"
                                  className="btn btn-success btn-block btn-lg gradient-custom-4 text-body "
                                  onClick={(event) => {
                                    this.submit(event);
                                  }}
                                >
                                  submit
                                </button>
                              }
                            </td>
                          </tr>

                          <tr className="text-center">
                            <td colSpan={3}>
                              <button
                                type="reset"
                                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body "
                                onClick={() => {
                                  this.reset();
                                }}
                              >
                                Reset
                              </button>
                            </td>
                          </tr>
                        </table>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default withRouter(UserAdd);
