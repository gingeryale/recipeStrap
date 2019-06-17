import React, { Component } from 'react';
import Rec from './Rec';
import { Container, Row,CardColumns  } from 'reactstrap';

class Allrec extends Component {

  render() {
	return (
		<Container>
       <h1>Show All Recipes</h1>
	 <div className="main-content-container container-fluid h-100">
		<Row>
		<CardColumns>
		{ 
		this.props.recs.map(r=><Rec r={r} key={r.id} />
			)
	}
	 </CardColumns>
	
	  </Row>
	  </div>
	  </Container>
	  
	);
  }



}

export default Allrec;
