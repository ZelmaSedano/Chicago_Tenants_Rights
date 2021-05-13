// technologies
import React from 'react';
// documents
import { Button } from './Button';
import '../App.css';
import './Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
      <h1>KNOW YOUR RIGHTS!</h1>
      <p>What are you waiting for?</p>

      {/* Buttons */}
      <div className='hero-btns'>
        {/* Button #1 */}
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          CALL HOTLINE
          <i className='fas fa-phone' />
        </Button>
        {/* Button #2 */}
        <Button
          className='btns'
          buttonStyle='btn--red'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          BOOK APPOINTMENT
        </Button>
      </div>

      <div className='contact'>
        <h2>Save 25-35% when you BOOK ONLINE & Complete the Intake Form!</h2>
      </div>

      {/* <div className='arrow'>
        <i class='fas fa-chevron-down'></i>
      </div> */}
    </div>
  );
}

export default Hero;
