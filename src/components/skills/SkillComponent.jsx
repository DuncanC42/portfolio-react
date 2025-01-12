import React from 'react';
import './SkillComponent.css';

export const SkillComponent = ({ logo, title }) => {
    return (
            <div className="skillComponent">
                <img src={logo} alt="logoRessource" width="75px"/>
                <p>{title}</p>
            </div>
    );
};