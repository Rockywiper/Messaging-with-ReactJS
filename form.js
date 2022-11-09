import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Mainform = () =>
{
    return(
        <div>
            <div style={{ display: 'block', 
                  width: 700, 
                  padding: 150, margin: 'auto' }}>
      
      <Form>
      <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" /></Form.Group><br/>

        <Form.Group>
          <Form.Label>Email address:</Form.Label>
          <Form.Control type="email" placeholder="Enter your email address" /></Form.Group><br/>

        <Form.Group>
          <Form.Label>Age:</Form.Label>
          <Form.Control type="number" placeholder="Enter your age" /></Form.Group><br/>

        <Button variant="primary" type="submit" style={{margin: 'auto'}}>
           Submit 
        </Button>
      </Form>
    </div>
  </div>
    )
    
}

export default Mainform