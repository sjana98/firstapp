import React, {useState, useEffect} from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import Logo from '../../assets/logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  // Mobile menu state
  const [sideNav, setSideNav] = useState(false);

  // Desktop fixed  Navbar menu
  const [sticky, setSticky] = useState(false);

  // Mobile icon
  const menuIcon = <FontAwesomeIcon icon={faBars} />

  // Side Nav
  const showSideNav = () => {
    setSideNav(!sideNav)
  }

  // Scroll fixed navbar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })
  
  
  return (
    <header id='site_header' className={`${sticky ? 'sticky' : ''}`}>
      <div className="container">
        <nav className="navbar" id='Navbar'>
          <div className="navbar_brand">
            <a href="/">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="navbar_toggler" onClick={showSideNav}>
            {menuIcon}
          </div>
          <div className={`menu_items ${sideNav === true ? 'mob_menu_items' : ''}`}>
            <ul>
              <li>
                <Link activeClass="active" to="Home" spy={true} smooth={true}>Home</Link>
              </li>
              <li>
                <Link to="About" spy={true} smooth={true}>About Us</Link>
              </li>
              <li>
                <Link to="Services" spy={true} smooth={true}>Services</Link> 
              </li>
              <li>
                <Link to="Blog" spy={true} smooth={true}>Blog</Link>
              </li>
              <li>
                <Link to="Contact" spy={true} smooth={true}>Contact Us</Link> 
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
