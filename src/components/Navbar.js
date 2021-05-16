// Desktop/2) React/YouTube/Brian
import React, { useState, useEffect } from 'react';
import { Link as Link1 } from 'react-router-dom';
import { Link as Link2 } from 'react-scroll';

// documents
import { SignInButton } from './SignInButton';
import './Navbar.css';
import logo from './images/logo1.jpeg';

// COMPONENT
function Navbar() {
  // States to alter:
  // used in handleclick(Hamburger/X) & closeMobileMenu(LINKS)
  const [click, setClick] = useState(false);
  // show button or not - used in useEffect
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Contact Button disappears in Mobile View ********************
  const showButton = () => {
    if (window.innerWidth <= 1140) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // button will only render once b/c of the empty parameters - if we don't have this there the button will pop up in Mobile Menu when you refresh page
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        {/* Top ************************************************/}
        <div className='navbar-top'>
          <div className='navbar-top-left'>
            <div className='navbar-top-colorblock'>
              <h5>Open Hours: Mon-Fri 8am-5pm</h5>
            </div>
            <div className='navbar-top-phone'>
              <h5>
                {/* if you want icon to float NEXT TO number, put icon inside h5 tag*/}
                <a
                  href='tel:312-877-5233'
                  className='phone'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fas fa-phone' />
                  312.877.5233
                </a>
              </h5>
            </div>
            <div className='navbar-top-location'>
              <h5>
                <a
                  href='https://goo.gl/maps/HdWpKT2rb7uB2mhK6'
                  className='phone'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i class='fas fa-location-arrow'></i>
                  77 W. Washington St. Suite 1009
                </a>
              </h5>
            </div>
          </div>
          <div className='navbar-top-right'>
            <a
              href='https://www.instagram.com/tenantsrightschicago/'
              className='nav-insta-icon'
              target='_blank'
              rel='noreferrer'
            >
              <i class='fab fa-instagram'></i>
            </a>
            <a
              href='https://www.facebook.com/chicagotenantsrightslaw'
              className='nav-facebook-icon'
              target='_blank'
              rel='noreferrer'
            >
              <i class='fab fa-facebook-f'></i>
            </a>
            <a
              href='https://twitter.com/ChiTenantRights'
              className='nav-yelp-icon'
              target='_blank'
              rel='noreferrer'
            >
              <i class='fab fa-twitter'></i>
            </a>
            <a
              href='https://www.yelp.com/biz/chicago-tenants-rights-law-chicago'
              className='nav-yelp-icon'
              target='_blank'
              rel='noreferrer'
            >
              <i class='fab fa-yelp'></i>
            </a>
          </div>
        </div>

        {/* Bottom *********************************************/}
        <div className='navbar-container'>
          {/* If you don't want top/bottom sections, just delete the top section and add display:flex property to .navbar - this will float everything on the same line */}

          <Link1 to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img className='logo-img' src={logo} alt='chicago'></img>
            <div className='logo-text'>
              {/* Chicago Tenants Rights */}C | T | R | L
            </div>
            {/* <i class='fab fa-typo3' /> */}
          </Link1>

          {/* Hamburger Menu */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          {/* Nav Menu */}
          {/* .active class is added in mobile */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link1 to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link1>
            </li>

            {/* Smooth Scroll Section */}
            <li className='nav-item'>
              <Link2
                className='nav-links smooth-scroll'
                to='section1'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                SERVICES
              </Link2>
            </li>
            <li className='nav-item '>
              <Link2
                className='nav-links smooth-scroll'
                activeClass='active'
                to='section2'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                ABOUT
              </Link2>
            </li>
            {/* End Smooth Scroll Section */}

            {/* Mobile SignUp Btn - Only shows up on Mobile */}
            <li className='mobile-link'>
              <Link1
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                CONTACT
              </Link1>
            </li>
          </ul>
          {/* END Nav Menu */}

          <div className='nav-btn'>
            {button && (
              <SignInButton buttonStyle='btn--outline' buttonSize='btn--medium'>
                CONTACT
              </SignInButton>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
