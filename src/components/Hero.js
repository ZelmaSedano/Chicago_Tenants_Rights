// technologies
import React from 'react';
import { Link } from 'react-scroll';
// documents
import { SignInButton } from './SignInButton';
import '../App.css';
import './Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
      <div className='hero-header-wrapper'>
        <h1>KNOW YOUR RIGHTS!</h1>
        <p>What are you waiting for?</p>
      </div>

      {/* Buttons */}
      <div className='hero-btns'>
        {/* make sure this button has btn assigned to it */}
        <a
          href='tel:312-877-5233'
          className='phone'
          target='_blank'
          rel='noreferrer'
        >
          <button className='btn contact-btn'>
            <p>CALL HOTLINE</p>
            <i className='fas fa-phone' />
          </button>
        </a>
        {/* Button #1 */}
        {/* <div className='contact'>
          <ContactButton
            className='contact-btn'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            CALL HOTLINE
            <i className='fas fa-phone' />
          </ContactButton>
        </div> */}

        {/* Button #2 */}
        <SignInButton
          className='btn'
          buttonStyle='btn--red'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          BOOK APPOINTMENT
        </SignInButton>
      </div>

      {/* Link is from 'react-scroll', and using the following values make it so that when you click on arrow, it smooth scrolls down to the next section*/}
      <div className='arrow'>
        <Link
          className='smooth-scroll'
          to='section1'
          spy={true}
          smooth={true}
          offset={70}
          duration={500}
        >
          <i class='fas fa-chevron-down'></i>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
