import './softskill.css';

function SoftSkill({ icon, title, description }) {
    return (
        <div className='soft-skill'>
            {icon}
            <div className='text'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default SoftSkill