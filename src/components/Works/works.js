import React from 'react';
import './works.css';
import { Values } from '../../assets/data/values';

function Works() {
    return (
        <section id='works'>
            <span className='title'>Who has my code?</span>
            <span className='description'>These are the brands I've had the privilege of collaborating with, and they currently have my code live and running online</span>
            <div className='images'>
                {
                    Values.Logos.map(
                        (logo) =>
                            <img src={logo.icon} alt={logo.label} />
                    )
                }
            </div>
        </section>
    )
}

export default Works;