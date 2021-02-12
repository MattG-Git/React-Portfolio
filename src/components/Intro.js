import React from 'react';
import { Button } from 'reactstrap';

const Intro = () => {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <h1>I'm Matt</h1>
                        <h2>Full Stack Developer</h2>
                        <p>Lorem ipsum blah blah blah blah blah</p>
                        <Button outline color="primary">Projects</Button>
                        <Button color="primary">Contact Me</Button>
                    </div>
                    <div className="col-3">
                        <img src="./Assets/Images/Goldhammer_logo.svg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;