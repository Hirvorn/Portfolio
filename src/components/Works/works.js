import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

function Works() {
    return (
        <section id='works'>
            <span className='works-title'>My portfolio</span>
            <span className='works-desc'>I am a skilled and passionate mobile developer with experience in Android</span>
            <div className='works-imgs'>
                <img src={Portfolio1} alt='' className='works-img' />
                <img src={Portfolio2} alt='' className='works-img' />
                <img src={Portfolio3} alt='' className='works-img' />
                <img src={Portfolio4} alt='' className='works-img' />
                <img src={Portfolio5} alt='' className='works-img' />
                <img src={Portfolio6} alt='' className='works-img' />
            </div>
        </section>
    )
}

export default Works;