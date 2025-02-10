import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { X , Menu} from 'lucide-react';
import { Button } from './button';
import './Navbar.css'

function Navbar() {
    const [ click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton =()=> {
      if(window.innerWidth <= 960){
        setButton(false)
      } else {
        setButton(true)
      }
    };

    window.addEventListener('resize', showButton)
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo">
            <h1>Log</h1>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
            {click ? <X /> : <Menu /> }
            </div>
            <ul className={click? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to="/services" className='nav-links' onClick={closeMobileMenu}>Services</Link>
              </li>
              <li className='nav-item'>
                <Link to="/product" className='nav-links' onClick={closeMobileMenu}>Product</Link>
              </li>
              <li className='nav-item'>
                <Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>sign up</Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} 
        </div>
    </nav>
    </>
  )
}

export default Navbar
