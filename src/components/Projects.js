import React from 'react';
import {Button} from 'reactstrap';
import { SITES } from "../shared/sites";

const Projects = () => {
    const sites = SITES;
    const sitesList = sites.map(site => {
        return (
            <div className="row align-items-center" id="projects">
                <div className="col-md-5 mb-5">
                    <img className="projectimg img-thumbnail" src={site.image} onClick={()=>window.open(site.link)}/>
                </div>
                <div className="col-md-7">
                    <p className="mb-0" style={{fontSize:"2.2rem", fontWeight:"100"}}>{site.name}</p>
                    <p style={{fontWeight:"700", color:"gray", fontStyle:"italic"}}>{site.subtitle}</p>
                    <p>{site.description}</p>
                    <Button className="mb-5" color="warning" size="lg" onClick={()=>window.open(site.link)}>View Project</Button>
                </div>
            </div>
        );
    })
    return(
        <div className="container">
            <h2 className="mb-5">My Projects</h2>
            {sitesList}
        </div>
        
    );
}

export default Projects; 