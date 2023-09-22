import React from 'react'
import './skill.css';

function Skill({ icon, title, description }) {

    return (
        <div className='skill'>
            {icon}
            <div className='skill-bar-text'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Skill