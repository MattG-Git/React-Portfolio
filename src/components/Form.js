import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Form = () => {
    return(
         <Form id="contact" action="mailto:matt.goldhammer@gmail.com" method="POST" enctype="multipart/form-data" name="EmailForm" className="form mt-5 p-5">
            <h2 className="mb5">Contact</h2>
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
            <Button color="warning" type="submit" size="lg" className="mt-4">Submit</Button>
        </Form>
    );
}

export default Form;