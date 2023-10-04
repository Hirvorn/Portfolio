import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../assets/main_flower.png';
import { Link } from 'react-scroll';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Rotate as Hamburger } from 'hamburger-react';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='navbar'>
            <img alt='Logo' src={logo} className='logo' />
            <div className='desktop-menu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-40} duration={500} className='list-item'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={0} duration={500} className='list-item'>About</Link>
                <Link activeClass='active' to='soft-skills' spy={true} smooth={true} offset={0} duration={500} className='list-item'>Soft</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={0} duration={500} className='list-item'>Portfolio</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={0} duration={500} className='list-item'>Contact</Link>
            </div>
            <button className='contact-me' onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
                <ChatBubbleOutlineIcon className='chat' /><span>Contact Me</span>
            </button>

            <span className='mobile-menu'>
                <Hamburger className='mobile-menu' toggled={showMenu} onToggle={toggled => { setShowMenu(toggled) }} rounded />
            </span>
            <div className='mobile-menu-list' style={{ visibility: showMenu ? 'visible' : 'hidden', pointerEvents: showMenu ? 'all' : 'none', opacity: showMenu ? '1' : '0' }}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-40} duration={500} className='item' onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-40} duration={500} className='item' onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='soft-skills' spy={true} smooth={true} offset={-40} duration={500} className='item' onClick={() => setShowMenu(false)}>Soft</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-40} duration={500} className='item' onClick={() => setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-40} duration={500} className='item' onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default NavBar