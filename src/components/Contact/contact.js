import './contact.css';
import LinkedInIcon from '../../assets/linkedin-icon.png';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Resume from '../../assets/data/Gionata_Barale_Resume_web.pdf';

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
                <a href={Resume} download='Gionata Barale resume.pdf' className='resume'>Download My Resume</a>
                <div className='links'>
                    <img src={LinkedInIcon} alt='' className='link' onClick={() => window.open('https://www.linkedin.com/in/gionata-barale-a432b1126', '_blank')} />
                </div>
            </form>
        </div>
    )
}

export default Contact