import React from 'react';
import {Button} from 'reactstrap';
import { SITES } from "../shared/sites";

const Projects = () => {
    const sites = SITES;
    const sitesList = sites.map(site => {
        return (
            <div className="row">
                <div className="col-md-5 mb-4">
                    <img className="projectimg img-thumbnail" src={site.image}/>
                </div>
                <div className="col-md-7">
                    <p>{site.name}</p>
                    <p>{site.subtitle}</p>
                    <p>{site.description}</p>
                    <Button outline color="primary"><a href={site.link}>View Project</a></Button>
                </div>
            </div>
        );
    })
    return(
        <div className="container">
            <h2>My Projects</h2>
            {sitesList}
        </div>
        
    );
}

export default Projects; 