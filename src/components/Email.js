import React from 'react'; 
import { Button, Form } from 'reactstrap';

export default function Email () { 
    return (
<div>
    <img style={{maxHeight:"350px"}}src="./Assets/Images/Goldhammer_logo.svg" />
    <Form id="contact" action="mailto:matt.goldhammer@gmail.com" method="POST" enctype="multipart/form-data" name="EmailForm">
        <Button color="warning" type="submit" size="lg" className="mb-5">Email Me</Button>
    </Form>
</div>
    ); 
}; 