import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../assets/main_flower.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

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

            <img alt='Menu' src={menu} className='mobile-menu' onClick={() => setShowMenu(!showMenu)} />
            <div className='mobile-menu-list' style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-40} duration={500} className='mobile-menu-list-item' onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-40} duration={500} className='mobile-menu-list-item' onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='soft-skills' spy={true} smooth={true} offset={-40} duration={500} className='mobile-menu-list-item' onClick={() => setShowMenu(false)}>Soft</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-40} duration={500} className='mobile-menu-list-item' onClick={() => setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-40} duration={500} className='mobile-menu-list-item' onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default NavBar