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
    <div className='cards-section' id='section1'>
      <div className='cards'>
        {/* ^^ 'services' is id to jump to'*/}

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

      {/* SERVICES SECTION: 100% width ******************/}
      {/* Services Header ********/}
      <div className='services-container'>
        <div className='services-wrapper'>
          <div className='services-header'>
            <h3>We offer free inital consultations</h3>
            <p>Our services include but are not limited to:</p>
            <br />
          </div>

          {/* List of Services */}
          <div className='list-container'>
            <div className='list-wrapper'>
              <div className='list-item'>
                <div className='icon-wrapper'>
                  <div className='icon'>
                    <i class='fas fa-search'></i>
                  </div>
                  <div className='list-item-text'>
                    <h3>Projects</h3>
                    <p>
                      I help you identify your skill sets, personal attributes,
                      and career goals and demystify job applications so you can
                      put your best food forward.
                    </p>
                  </div>
                </div>

                {/* <ul className='left-list'>
                <li>Liability</li>
                <li>Family Law</li>
                <li>Civil Litigation</li>
              </ul>

              <ul className='middle-left-list'>
                <li>Consumer Advocacy</li>
                <li>Real Estate Closings</li>
                <li>Consumer Advocacy</li>
              </ul>

              <ul className='middle-right-list'>
                <li>Criminal Defense</li>
                <li>Recovering Deposits</li>
                <li>Class Action Suits</li>
              </ul> */}
              </div>
            </div>
          </div>
          {/* END List of Services */}

          {/* Services Section */}
          <div className='services-bottom-text'>
            <h2>
              Save 25-35% when you BOOK ONLINE & Complete the Intake Form!
            </h2>
          </div>
          {/* END Services Section */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
