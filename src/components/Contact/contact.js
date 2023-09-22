import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import InstragramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_avzokaj', 'template_mtw1eod', form.current, 'oxGb_Fz3iMU5EzH0_')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent!');
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div id='contact'>
            <h1 className='contact-page-title'>Contact Me</h1>
            <span className='contact-desc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                <input className='name' type='text' placeholder='Your Name' name='from_name' />
                <input className='email' type='email' placeholder='Your Email' name='from_email' />
                <textarea className='msg' name='message' rows='5' placeholder='Your Message' />
                <button type='submit' value='Send' className='submit-btn'>Submit</button>
                <div className='links'>
                    <img src={FacebookIcon} alt='' className='link' />
                    <img src={TwitterIcon} alt='' className='link' />
                    <img src={InstragramIcon} alt='' className='link' />
                </div>
            </form>
        </div>
    )
}

export default Contact