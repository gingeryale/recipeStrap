import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Addrec extends Component {

  render() {
	return (
		<div className="app">
			<h1>Add Recipe</h1>
		<Form>
        <FormGroup>
          <Label for="name">Recipe Name</Label>
          <Input type="text" name="name" placeholder="name of recipe" onChange={this.handleChange.bind(this)}/>
        </FormGroup>
		<FormGroup>
          <Label for="prep">Recipe Preparation Time</Label>
          <Input type="text" name="prep" placeholder="preperation time" onChange={this.handleChange.bind(this)}/>
        </FormGroup>
		<FormGroup>
          <Label for="img">Recipe Image</Label>
          <Input type="text" name="img" placeholder="image" onChange={this.handleChange.bind(this)}/>
        </FormGroup>
		<FormGroup>
          <Input type="select" name="category" onChange={this.handleChange.bind(this)}>
		  <option>select</option>
		  { 
        this.props.cats.map(c=> <option key={c.id} value={c.id}>{c.name}</option>)
    }
          </Input>
        </FormGroup>
		<Button color="warning" onClick={this.sendData.bind(this)}>Add</Button>
		</Form>
  		
		</div>
	);
  }

  handleChange(e){
  	this.setState({[e.target.name]: e.target.value})
  }


async sendData(){
	const responseData = await fetch(`http://localhost:3000/api/rec`, {
		method:'post',
		headers: {
			'Accept':'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(this.state)
	});
	const content = await responseData.json();
	this.props.refresh();
	this.props.history.push('/all');
	console.log(content);
  }
}

export default Addrec;
