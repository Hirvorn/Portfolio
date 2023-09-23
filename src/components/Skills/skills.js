import React from 'react';
import './skills.css';
import Skill from './skill';
import { Values } from '../../assets/data/values';

function Skills() {
    return (
        <section id='skills'>
            <div className='container'>
                <span className='skill-title'>What I do</span>
                <span className='skill-desc'>Experienced Android Developer who loves crafting awesome apps with Kotlin, collaborating with top brands, making APIs work like magic, and designing user-friendly interfaces while keeping things snappy!</span>
                <div className='skill-bars'>
                    {
                        Values.HardSkills.map(
                            (skill) =>
                                <Skill
                                    icon={skill.icon}
                                    image_label={skill.image_label}
                                    title={skill.title}
                                    description={skill.description}
                                />
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills;  