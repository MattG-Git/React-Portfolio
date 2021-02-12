import React from 'react';
import { BADGES } from "../shared/badges";

const Certs = () => {
    const badges = BADGES;
    const badgeList = badges.map(badge => {
        return (
            <div className="col">
                <img className="badgeLogo" src={badge.image}/>
                <p className="badgedesc mb-0 mt-3">{badge.name}</p>
                <p className="badgecompdate mb-3">{badge.date}</p>
            </div>
        )
    })

    return(
        <div>
            <h2>My Certificates</h2>
            <p>Nucamp Full-Stack Development Bootcamp Graduate | January 2021</p>
            <div className="container">
                <div className="row">
                    {badgeList}
                </div>
            </div>
        </div>
    );
}

export default Certs; 