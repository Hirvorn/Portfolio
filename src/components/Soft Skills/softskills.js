import { Values } from '../../assets/data/values';
import './softskills.css';
import SoftSkill from './softskill';

function SoftSkills() {
    return (
        <section id="soft-skills">
            <div className='container'>
                <span className='title'>Soft Skills</span>
                <span className='description'>I'm not just about code! I'm a problem-solving, adaptable, and creative Android Developer who loves working with teams, communicating ideas clearly, and always learning something new. I'm patient with bugs, passionate about user experiences, and ready to tackle any challenge that comes my way!</span>
                <div className='bars'>
                    {
                        Values.SoftSkills.map(
                            (softskill) =>
                                <SoftSkill
                                    icon={softskill.icon}
                                    title={softskill.title}
                                    description={softskill.description}
                                />
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default SoftSkills