import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Registration extends Component {
  constructor() {
    super();
    this.state = {
      "firstName": '',
      "lastName": '',
      "loginId": '',
      "password": '',
      "roleId": '',
      "data": "",
      "agree": true
    }
  }
  reset() {
    this.setState({
      "firstName": '',
      "lastName": '',
      "loginId": '',
      "password": '',
      "roleId": '',
      "data": "",
      "agree": true

    })
  }
  valid() {
    if (this.state.firstName === '' && this.state.lastName === '' && this.state.loginId === '' && this.state.password === '' && this.state.roleId === '') {
      this.setState({ data: " Please fill your corret info..." })
    } else if (this.state.firstName === '') {
      this.setState({ data: "Enter firstName" })
    } else if (this.state.lastName === '') {
      this.setState({ data: "Enter lastName" })
    } else if (this.state.loginId === '') {
      this.setState({ data: "Enter loginId" })
    } else if (this.state.password === '') {
      this.setState({ data: "Enter Password" })
    } else if (this.state.roleId === '') {
      this.setState({ data: "Enter Role id" })
    } else { return true }
  }

  register(event) {
    event.preventDefault();
    this.setState({ data: '' })

    if (this.valid()) {
      const url = "http://api.sunilos.com:9080/ORSP10/User/save"
      axios.post(url, this.state).then((response) => {
        console.log(response)
        if (response.data.result.message === "loginId already exists") {
          this.setState({ data: "loginId already exists" })
        } else if (response.data.success === true) {
          // alert("Form has been submitted")}
          this.setState({ data: "Registration Success" })
        } else {
          this.setState({ data: "Role id incorrect" })

        }
      })
    }
  }
  render() {
    return (
      <div >
        <section
          className="vh-100 bg-image"
        // style={{backgroundImage: url(require("../image/home.jpg"))}}
        >
          <div className="mask d-flex align-items-center h-50 gradient-custom-3">
            <div className="container h-50" style={{ width: "80%" }}>
              <div className="row d-flex justify-content-center align-items-center h-50">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card" style={{ borderRadius: '50px' }}>
                    <div className="card-body ">
                      <h2 className="text-uppercase text-center mb-0">
                        Create an account
                      </h2>
                      <form className='p-5 '>
                        <div className="form-outline mb-1">
                          <label
                            className="form-label"
                            htmlFor="form3Example1cg"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            id="form3Example1cg"
                            className="form-control form-control-lg"
                            onChange={(event) => { this.setState({ firstName: event.target.value }) }}
                            placeholder="Enter first name"
                          />

                        </div>
                        <div className="form-outline mb-1">
                          <label
                            className="form-label"
                            htmlFor="form3Example2cg"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="form3Example2cg"
                            className="form-control form-control-lg"
                            onChange={(event) => { this.setState({ lastName: event.target.value }) }}
                            placeholder="Enter last name"
                          />

                        </div>

                        <div className="form-outline mb-1">
                          <label
                            className="form-label"
                            htmlFor="form3Example3cg"
                          >
                            Login id
                          </label>
                          <input
                            type="loginId"
                            id="form3Example3cg"
                            className="form-control form-control-lg"
                            onChange={(event) => { this.setState({ loginId: event.target.value }) }}
                            name="loginId"
                            placeholder="Enter login id"
                          />

                        </div>

                        <div className="form-outline mb-1">
                          <label
                            className="form-label"
                            htmlFor="form3Example4cg"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            id="form3Example4cg"
                            className="form-control form-control-lg"
                            onChange={(event) => { this.setState({ password: event.target.value }) }}
                            name="password"
                            placeholder="Enter password"
                          />

                        </div>

                        <div className="form-outline mb-1">
                          <label
                            className="form-label"
                            htmlFor="form3Example6cg"
                          >
                            Role Id
                          </label>
                          <input
                            type="roleId"
                            id="form3Example6cg"
                            className="form-control form-control-lg"
                            onChange={(event) => { this.setState({ roleId: event.target.value }) }}
                            placeholder="Enter roll id"
                          />

                        </div>

                        <p style={{ color: 'red' }}>{this.state.data}</p>

                        <div className="form-check d-flex justify-content-center mb-2">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            onChange={() => { this.setState({ agree: !this.state.agree }) }}
                            value=""
                            id="form2Example7cg"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example7cg"
                          >
                            I agree all statements in{" "}
                            <Link to="/" className="text-body">
                              <u>Terms of service</u>
                            </Link>
                          </label>
                        </div>

                        <span>
                          <button
                            type="button"
                            disabled={this.state.agree}
                            className="btn btn-success btn-block btn-lg gradient-custom-4 text-body "
                            onClick={(event) => { this.register(event) }}
                          >
                            Register
                          </button>
                        </span>

                        <span style={{ float: "right" }}>
                          <button
                            type="reset"
                            className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body "
                            onClick={() => { this.reset() }}
                          >
                            Reset
                          </button>
                        </span>

                        <p className="text-center text-muted mt-1 mb-0">
                          Have already an account?{" "}
                          <Link to="/login" className="fw-bold text-body">
                            <u>Login here</u>
                          </Link>
                        </p>
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