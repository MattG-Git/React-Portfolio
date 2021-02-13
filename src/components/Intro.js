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
                        <p>It's great to meet you! I am a full stack developer in Las Vegas, Nevada looking to kick-off my web development career with the right team. In January of 2021, I completed an intensive 6-month code bootcamp that provided me a strong foundation in React, React Native, Nodejs, Express, and MongoDB. Let's connect and build awesome code! </p>
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