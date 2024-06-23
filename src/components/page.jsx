import {React, useState} from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


function Page(){

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    return(
        <>

        <main>
        <div className="container">
  <div className="row row-cols-1 row-cols-md-2 align-items-center justify-content-center">
    <div className="col">
    
      <h1>Learn to code by watching others</h1>
      <p className="maintext">See how experienced developers solve problems in real-time.Watching 
      scripted tutorialsis great, but understanding how developers think is invaluable.</p>
    </div>
    <div className="col">
      <button className="pricebutton">Try it free 7 days <span>then $20/mo. thereafter</span></button>
      <section className="formbox">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Control type="text" className="inpt" placeholder="First Name" required />
          <Form.Control.Feedback type="invalid" className="errormsg">
            First Name cannot be empty
          </Form.Control.Feedback>
            
          <Form.Control type="text" className="inpt" placeholder="Last Name" required />
          <Form.Control.Feedback type="invalid" className="errormsg">
            Last Name cannot be empty
          </Form.Control.Feedback>
          <Form.Control type="email" className="inpt" placeholder="Email Address" required />
          <Form.Control.Feedback type="invalid" className="errormsg">
            Looks like this is not an email
          </Form.Control.Feedback>
          <Form.Control type="password" className="inpt" placeholder="Password" required />
          <Form.Control.Feedback type="invalid" className="errormsg">
            Password cannot be empty
          </Form.Control.Feedback>
            <button type="submit" className="submitbutton">CLAIM YOUR FREE TRIAL</button>
            <p className="terms">By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
        </Form>
      </section>
    </div>
  </div>
  </div>

  
    
  

        </main>

        </>
    )
}

export default Page;