import { Values } from '../../assets/data/values';
import './softskills.css';
import SoftSkill from './softskill';

function SoftSkills() {
    return (
        <section id="soft-skills">
            <div className='container'>
                <span className='title'>Soft Skills</span>
                <span className='description'>I have these soft skills</span>
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