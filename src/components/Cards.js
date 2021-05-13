// this is the Cards Section, much like the Hero Section
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

// images
import Eviction from './images/img-2.jpg';
import Landlords from './images/img-1.jpg';
import SueLandlord from './images/img-10.jpg';
import Deposit from './images/img-5.jpg';
import Call from './images/img-9.jpg';

function Cards() {
  return (
    <div className='cards' id='about'>
      {/* ^^ without this className image appears instead of white background */}
      <h1>LEGAL SERVICES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {/* Top Row of Cards */}
          <ul className='cards__items'>
            {/* src, text, label, & path are properties that are custom
            -- They are being plugged into CardItem Component Occurrence */}
            <CardItem
              path='/services'
              label='Eviction'
              src={Eviction}
              // src='./img-2.jpg'
              text='Eviction Defense Consultation'
            />
            {/* if you don't keep the images in these cards in public, it doesn't work :(
            Other image is url in CSS */}
            <CardItem
              path='/services'
              label='Landlords'
              src={Landlords}
              text='Property Management Help'
            />
          </ul>
          {/* Bottom Row of Cards */}
          <ul className='cards__items'>
            <CardItem
              src={SueLandlord}
              text='Break Your Lease'
              label='Termination'
              path='/services'
            />
            <CardItem
              src={Deposit}
              text='Security Deposit Issues'
              label='Refunds'
              path='/sign-up'
            />
            <CardItem
              src={Call}
              text='Schedule a Call with Attorney Drennen'
              label='Contact'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
