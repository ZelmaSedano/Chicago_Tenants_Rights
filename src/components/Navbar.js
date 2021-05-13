// Desktop/2) React/YouTube/Brian
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// documents
import { Button } from './Button';
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

  // BUTTON disappears in Mobile View *************************
  const showButton = () => {
    if (window.innerWidth <= 1140) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // button will only render once b/c of the empty parameters
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        {/* Top ******************************************************************************/}
        <div className='navbar-top'>
          <div className='navbar-top-left'>
            <div className='navbar-top-colorblock'>
              <h5>Open Hours: Mon-Fri 8am-5pm</h5>
            </div>
            <div className='navbar-top-phone'>
              <h5>
                {/* if you want icon to float NEXT TO number, put icon inside h5 tag*/}
                <Link to='tel:312-877-5233' className='phone' target='_blank'>
                  <i className='fas fa-phone' />
                  312.877.5233
                </Link>
              </h5>
            </div>
            <div className='navbar-top-location'>
              <h5>
                <Link
                  to='https://goo.gl/maps/HdWpKT2rb7uB2mhK6'
                  className='phone'
                  target='_blank'
                >
                  <i class='fas fa-location-arrow'></i>
                  77 W. Washington St. Suite 1009
                </Link>
              </h5>
            </div>
          </div>
          <div className='navbar-top-right'>
            <Link
              to='www.instagram.com/tenantsrightschicago/'
              className='nav-insta-icon'
              target='_blank'
            >
              <i class='fab fa-instagram'></i>
            </Link>
            <Link
              to='https://www.facebook.com/chicagotenantsrightslaw'
              className='nav-facebook-icon'
              target='_blank'
            >
              <i class='fab fa-facebook-f'></i>
            </Link>
            <Link
              to='https://twitter.com/ChiTenantRights'
              className='nav-yelp-icon'
              target='_blank'
            >
              <i class='fab fa-twitter'></i>
            </Link>
            <Link
              to='https://www.yelp.com/biz/chicago-tenants-rights-law-chicago'
              className='nav-yelp-icon'
              target='_blank'
            >
              <i class='fab fa-yelp'></i>
            </Link>
          </div>
        </div>

        {/* Bottom *******************************************************************/}
        <div className='navbar-container'>
          {/* If you don't want top/bottom sections, just delete the top section and add display:flex property to .navbar - this will float everything on the same line */}

          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img className='logo-img' src={logo} alt='chicago'></img>
            <div className='logo-text'>
              {/* Chicago Tenants Rights */}C | T | R | L
            </div>
            {/* <i class='fab fa-typo3' /> */}
          </Link>

          {/* Hamburger Menu */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          {/* Nav Menu */}
          {/* .active class is added in mobile */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='#section1'
                className='nav-links'
                onClick={() => window.location.replace('/#about')}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>

            {/* Mobile SignUp Btn - Only shows up on Mobile */}
            <li className='mobile-link'>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                CONTACT
              </Link>
            </li>
          </ul>
          {/* END Nav Menu */}

          <div className='nav-btn'>
            {button && (
              <Button buttonStyle='btn--outline' buttonSize='btn--medium'>
                CONTACT
              </Button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
