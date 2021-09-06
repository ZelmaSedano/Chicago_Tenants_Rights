// this is the Cards Section, much like the Hero Section
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';

// images
import Eviction from './images/img-2.jpg';
import Landlords from './images/img-1.jpg';
import SueLandlord from './images/img-10.jpg';
import Deposit from './images/img-5.jpg';
import Call from './images/img-12.png';

function Cards() {
  return (
    <div className='cards-section' id='section1'>
      {/* 'section1' is id to jump to'*/}
      <div className='cards'>
        {/* Heading Text **************************/}
        <div className='header-text'>
          <h1>
            OUR <span>SERVICES </span>
          </h1>
        </div>
        {/* End of Header *************************/}

        {/* Cards  ********************************/}
        <div className='cards__container'>
          <div className='cards__wrapper'>
            {/* Top Row of Cards *************/}
            <ul className='cards__items'>
              {/* src, text, label, & path are properties that are custom
            -- They are being plugged into CardItem Component Occurrence */}

              <CardItem
                path='/sign-up'
                label='EVICTION'
                src={Eviction}
                text='Eviction Defense Consultation'
              />

              <CardItem
                path='/sign-up'
                label='LANDLORDS'
                src={Landlords}
                // src='./img-2.jpg'
                text='Property Management Help'
              />
            </ul>

            {/* Bottom Row of Cards ***********/}
            <ul className='cards__items'>
              <CardItem
                src={SueLandlord}
                text='Break Your Lease'
                label='TERMINATION'
                path='/sign-up'
              />
              <CardItem
                src={Deposit}
                text='Security Deposit Issues'
                label='REFUNDS'
                path='/sign-up'
              />
              <CardItem
                src={Call}
                text='Class Action Suits and Defense'
                label='JUSTICE'
                path='/sign-up'
              />
            </ul>
          </div>
        </div>
        {/* End of Cards  **************************/}
      </div>
      {/* END of .cards (90% width */}
    </div>
  );
}

export default Cards;
