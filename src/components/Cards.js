// this is the Cards Section, much like the Hero Section
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

// images
import Eviction from './images/img-2.jpg';
import Landlords from './images/img-1.jpg';
import SueLandlord from './images/img-10.jpg';
import Deposit from './images/img-5.jpg';
import Call from './images/img-12.png';

function Cards() {
  return (
    <div className='cards' id='section1'>
      {/* ^^ 'services' is id to jump to'*/}

      {/* Heading Text **************************/}
      <div className='header-text'>
        <h1>
          OUR <span>SERVICES </span>
        </h1>
      </div>
      {/* End of Header **************************/}

      {/* Cards  *********************************/}
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

      {/* List of Services ***********************/}

      {/* <div className='cards__container'>
        <div className='cards__wrapper'>

          <ul className='cards__items'></ul> */}

      <div className='services-text-container'>
        <div className='services-text'>
          <p>
            <span>We offer free inital consultations.</span> &nbsp; Our services
            also include:
          </p>
          <br />
        </div>

        {/* list of services */}
        <div className='lists'>
          <div className='list-wrapper'>
            <ul className='left-list'>
              <li>Chicago Landlord and Tenant Services</li>

              <li>Family Law</li>
              <li>Civil Litigation</li>
              <li>Class Action Suits and Defense</li>
              <li>Consumer Advocacy and Protection</li>
              <li>Criminal Defense</li>
            </ul>

            <ul className='right-list'>
              <li>Contracts</li>

              <li>Recovering Security Deposits from Landlord</li>
              <li>Divorce</li>
              <li>DUI/DWI</li>
              <li>Consumer Advocacy and Protection</li>
              <li>Real Estate Title Closings</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
