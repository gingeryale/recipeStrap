import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {
  state={}

  render() {
	return (
		<div className="app">
            <h1>Login</h1>
            <Form>
        <FormGroup>
          <Label for="login">Username</Label>
          <Input type="text" name="username" placeholder="username" onChange={this.handleChange.bind(this)}/>
        </FormGroup>
		<FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" placeholder="password" onChange={this.handleChange.bind(this)}/>
        </FormGroup>
		<Button color="info" onClick={this.props.sendLogin.bind(null, this.state)}>Enter</Button>
		</Form>
        <br />
        <hr />
        <br />
			<h3>Register</h3>
		<Form>
        <FormGroup>
          <Label for="firstname">First name</Label>
          <Input type="text" name="firstname" placeholder="firstname" onChange={this.handleChange.bind(this)}/>
        </FormGroup>
        <FormGroup>
          <Label for="lastname">Last Name</Label>
          <Input type="text" name="lastname" placeholder="lastname" onChange={this.handleChange.bind(this)}/>
        </FormGroup>
        <FormGroup>
          <Label for="login">Username</Label>
          <Input type="text" name="username" placeholder="username" onChange={this.handleChange.bind(this)}/>
        </FormGroup>
		<FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" placeholder="password" onChange={this.handleChange.bind(this)}/>
        </FormGroup>
		<Button color="info" onClick={this.sendResiter.bind(this)}>Register</Button>
		</Form>
		</div>
	);
  }

  handleChange(e){
  	this.setState({[e.target.name]: e.target.value})
  }


async sendResiter(){
	const responseData = await fetch(`http://localhost:3000/api/users`, {
		method:'post',
		headers: {
			'Accept':'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(this.state)
	});
	const content = await responseData.json();
	console.log(content);
  }


}


export default Login;
