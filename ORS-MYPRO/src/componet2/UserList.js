import React, { Component } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

export default class UserList extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
      id:'',
      name:'',
      email:'',
      password:''
     
    } 
  }
 
  
  update() {
    let url = "http://api.sunilos.com:9080/ORSP10/User/search";
    axios.post(url, this.state).then((res) => {
      this.setState({ list: res.data.result.data })
      console.warn(this.state.list)
    }
    )
  }
  componentDidMount() {
    axios.get("http://localhost:3308/empGet/search").then((res) => {
      console.log(res.data.list);
      this.setState({ post: res.data.list });
    });
  }
  delete(id) {
    let url = "http://localhost:3308/empDelete/delete/" + id;
    axios.get(url).then((res) => {
      this.post = res.data.list;
      // console.log(res.data.result);

      this.componentDidMount();
    });
  }
  render() {
    return (
      <div className='bg' style={{marginTop:"70px"}}>
        <h1 >User List page</h1>
        <Table striped bordered hover>
          <thead>
            <tr >
              <th>#</th>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>password</th>
              <th colSpan='2' cellspacing='15px'>Operation</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.post.map((item, i) => {
                return (
                  <tr key={item.id}>
                    <td>{i+1}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    
                    <td> <Link  to={ "/adduser/" + item.id } >Edit</Link></td>
                    <td>
                        <button onClick={() => this.delete(item.id)}>Delete</button>
                    </td>
                 </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    )
  }
}
