import React from 'react';
import { LANGUAGES } from "../shared/languages";

const Skills = () => {
    const languages=LANGUAGES;
    const languageList=languages.map(language => {
        return (
            <div className="col">
                <i className={language.path}></i>
            </div>
        );
    })
    return(
        <div className="container skillslogo">
                <h2>My Skills</h2>
            <div className="row">
                {languageList}
            </div>
        </div>
    );
}

export default Skills; 