import React from 'react';
import { Button } from 'reactstrap';

const Intro = () => {
    return(
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-9">
                        <h1>I'm Matt</h1>
                        <h2>Full Stack Developer</h2>
                        <p>Lorem ipsum blah blah blah blah blah</p>
                        <Button outline color="primary">My Work</Button>
                        <Button color="primary">Contact Me</Button>
                    </div>
                    <div class="col-3">
                    {/*bootstrap image*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;