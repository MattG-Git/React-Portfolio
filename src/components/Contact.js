import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Contact = () => {
    return(
        <Form className="form mt-5 p-5">
            <h2>Contact</h2>
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    <img src="./Assets/Images/Goldhammer_logo.svg" />
                </div>
                <div className="col-md-6">
                    <FormGroup>
                        <Label for="Name">Name</Label>
                        <Input type="name" name="name" id="name" placeholder="First and Last Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Email">Email</Label>
                        <Input type="email" name="email" id="Email" placeholder="Email Address"  />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Message">Message</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                </div>
                </div>
            </div>
            <Button>Submit</Button>
        </Form>
    );
}

export default Contact;