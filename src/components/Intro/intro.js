import './intro.css';
import Wrapper from '../Wrapper/wrapper';

const Intro = () => {
    return (
        <section id='intro'>
            <Wrapper />
            <div className='intro-content'>
                <div className='hello'>Hello,</div>
                <div className='intro-text'>I'm <br className='carriage' /><span className='intro-name'>Gionata Barale</span> <br />Senior Android Developer</div>
                <div className='intro-secondary-text'>and React JS Dev</div>
            </div>
        </section>
    );
}

export default Intro;