import './intro.css';
import { Link } from 'react-scroll';
import Wrapper from '../Wrapper/wrapper';

const Intro = () => {
    return (
        <section id='intro'>
            <Wrapper />
            <div className='intro-content'>
                <div className='hello'>Hello,</div>
                <div className='intro-text'>I'm <span className='intro-name'>Gionata Barale</span> <br />Senior Android Developer</div>
                {/*}<Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btn-img' />Hire Me</button></Link>{*/}
            </div>
        </section>
    );
}

export default Intro;