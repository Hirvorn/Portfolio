import React, { useState } from 'react';
import './skills.css';
import Skill from './skill';
import { Values } from '../../assets/data/values';
import useWindowSize from '../../utils/useWindowSize';

function Skills() {
    const [open, setOpen] = useState(window.innerWidth > 720);
    const show = () => setOpen((prevState) => !prevState);

    const size = useWindowSize();

    return (
        <section id='skills'>
            <div className='container'>
                <span className='skill-title'>What I do</span>
                <span className='skill-desc'>Experienced Android Developer who loves crafting awesome apps with Kotlin, collaborating with top brands, making APIs work like magic, and designing user-friendly interfaces while keeping things snappy!</span>
                <div className='skill-bars'>
                    {
                        Values.HardSkillsMobile
                            .map(
                                (skill) =>
                                    <Skill
                                        key={skill.title}
                                        icon={skill.icon}
                                        image_label={skill.image_label}
                                        title={skill.title}
                                        description={skill.description}
                                    />
                            )
                    }
                </div>
                {
                    (
                        size.width <= 720 &&
                        <div className={open ? 'skill-bars-other' : 'skill-bars-other closed'}>
                            {
                                Values.HardSkillsOthers
                                    .map(
                                        (skill) =>
                                            <Skill
                                                key={skill.title}
                                                icon={skill.icon}
                                                image_label={skill.image_label}
                                                title={skill.title}
                                                description={skill.description}
                                            />
                                    )
                            }
                        </div>
                    ) || (
                        <div className='skill-bars-other'>
                            {
                                Values.HardSkillsOthers
                                    .map(
                                        (skill) =>
                                            <Skill
                                                key={skill.title}
                                                icon={skill.icon}
                                                image_label={skill.image_label}
                                                title={skill.title}
                                                description={skill.description}
                                            />
                                    )
                            }
                        </div>
                    )
                }
                <button className='show-more' onClick={show}>{(open) ? 'Show Less' : 'Show More'}</button>
            </div>
        </section>
    )
}

export default Skills;  