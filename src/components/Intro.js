import React from 'react';
import { Button } from 'reactstrap';

const Intro = () => {
    return(
        <div>
            <div className="container mt-5 pt-5">
                <div className="row align-items-center">
                    <div className="col-md-7 order-lg-first order-xl-first order-md-first">
                        <h1>I'm Matt</h1>
                        <p className="mb-0" style={{fontSize:"2.2rem", fontWeight:"100"}}>Full Stack Developer</p>
                        <a style={{color:"gray"}} href='https://github.com/MattG-Git'><i className="pr-4 lni footericon lni-github"></i></a>
                        <a style={{color:"gray"}} href='https://www.linkedin.com/in/matthew-goldhammer-80aa4797/'><i className="mb-4 lni footericon lni-linkedin-original"></i></a>
                        <p>Nice to meet you! When it comes to my work, tasteful colors, beautiful visuals, minimalist principles, and a cheeky personality are the ingredients I use to create unique and memorable design solutions. Check out what I can offer below and be sure to reach out if you'd like to work together.</p>
                        <Button onClick={() => {window.location.href="#projects"}} className="mt-3" size="lg" color="warning">Projects</Button>
                       { /*<Button onClick={() => {window.location.href="#contact"}} className="m-3" color="warning" size="lg">Contact Me</Button>*/ }
                    </div>
                    <div className="col-md-5 order-sm-first order-first mb-3">
                        <img className="img-thumbnail" style={{maxHeight:"375px", borderRadius:"50%"}}src="./Assets/Images/peru.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;