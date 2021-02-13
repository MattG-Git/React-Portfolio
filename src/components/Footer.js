import React from 'react';

const Footer = () => {

    return(
        <div className="socialicon p-4">
            <div className="row">
                <div className="col">
                    <a style={{color:"whitesmoke"}}role="button" href="mailto:Matt.goldhammer@gmail.com"><i className="pr-4 footericon lni lni-envelope"></i></a>
                    <a style={{color:"whitesmoke"}} role="button" href="tel:+17024607272"><i className="pr-4 footericon lni lni-phone"></i></a>
                    <a style={{color:"whitesmoke"}} href='https://github.com/MattG-Git'><i className="pr-4 lni footericon lni-github"></i></a>
                    <a style={{color:"whitesmoke"}} href='https://www.linkedin.com/in/matthew-goldhammer-80aa4797/'><i className="lni footericon lni-linkedin-original"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Footer; 