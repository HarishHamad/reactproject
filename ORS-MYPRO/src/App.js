import React, { Component } from 'react'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard1 from './component/Dashboard1'
import Login from './component/Login';
import Registration from './component/Registration';
import Home from './component/Home';
import Footer from './componet2/Footer';
import Alert from './componet2/Alert';


// import App1 from './component/App1';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      alert: ''
    }
  }
  showAlert = (message, type) => {
    this.setState({ alert: { message: message, type: type } })
    setTimeout(() => {
      this.setState({ alert: null })
    }, 3000);
  }
  render() {
    return (
      <>
        {/* <App1 /> */}
        <BrowserRouter>
          <Dashboard1 />
          <Alert alert={this.state.alert} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/registration' element={<Registration  showAlert={this.showAlert} />} />
            <Route path='/login' element={<Login showAlert={this.showAlert}/>}  />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    )
  }
}
