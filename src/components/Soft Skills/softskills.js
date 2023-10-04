import { Values } from '../../assets/data/values';
import './softskills.css';
import SoftSkill from './softskill';
import { useState } from 'react';
import useWindowSize from '../../utils/useWindowSize';

function SoftSkills() {
    const [open, setOpen] = useState(window.innerWidth > 720);
    const show = () => setOpen((prevState) => !prevState);

    const size = useWindowSize();

    return (
        <section id="soft-skills">
            <div className='container'>
                <span className='title'>Soft Skills</span>
                <span className='description'>I'm not just about code! I'm a problem-solving, adaptable, and creative Android Developer who loves working with teams, communicating ideas clearly, and always learning something new. I'm patient with bugs, passionate about user experiences, and ready to tackle any challenge that comes my way!</span>
                <div className='bars'>
                    {
                        Values.SoftSkillsMobile.map(
                            (softskill) =>
                                <SoftSkill
                                    key={softskill.title}
                                    icon={softskill.icon}
                                    title={softskill.title}
                                    description={softskill.description}
                                />
                        )
                    }
                </div>
                {
                    (
                        size.width <= 720 &&
                        <div className={open ? 'bars-other' : 'bars-other closed'}>
                            {
                                Values.SoftSkillsOthers
                                    .map(
                                        (softskill) =>
                                            <SoftSkill
                                                key={softskill.title}
                                                icon={softskill.icon}
                                                title={softskill.title}
                                                description={softskill.description}
                                            />
                                    )
                            }
                        </div>
                    ) || (
                        <div className='bars-other'>
                            {
                                Values.SoftSkillsOthers
                                    .map(
                                        (softskill) =>
                                            <SoftSkill
                                                key={softskill.title}
                                                icon={softskill.icon}
                                                title={softskill.title}
                                                description={softskill.description}
                                            />
                                    )
                            }
                        </div>
                    )
                }
                <button className='show-more' onClick={show}>{open ? 'Show Less' : 'Show More'}</button>
            </div>
        </section>
    )
}

export default SoftSkills