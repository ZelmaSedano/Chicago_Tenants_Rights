// this is the Cards Section, much like the Hero Section
import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div>
      {/* <div className='lists'>
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
          </div> */}

      {/* SERVICES SECTION: 100% width ******************/}
      {/* Services Header ********/}
      <div className='services-container'>
        <div className='services-wrapper'>
          <div className='services-header'>
            <h3>We offer free inital consultations</h3>

            <h1 className='services-h1'>
              Other services include, but are not limited to:
            </h1>
            <br />
          </div>

          {/* List of Services *****************/}
          <div className='services'>
            {/* wrapper that holds 2 Lists */}
            <div className='cen'>
              {/* List 1 */}
              <div className='service'>
                <i className='fas fa-anchor'></i>
                <h2>Family Law</h2>
              </div>

              <div className='service'>
                <i className='fab fa-android'></i>
                <h2>Criminal Defense</h2>
              </div>

              <div className='service'>
                <i className='fab fa-angellist'></i>
                <h2>Civil Litigation</h2>
              </div>

              {/* List 2 */}
              <div className='service'>
                <i className='fas fa-apple-alt'></i>
                <h2>Class Action</h2>
              </div>

              <div className='service'>
                <i className='fas fa-archway'></i>
                <h2>Real Estate Closings</h2>
              </div>

              <div className='service'>
                <i className='far fa-angry'></i>
                <h2>DUI/DWI</h2>
              </div>
            </div>
          </div>
          {/* END List of Services */}

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

export default Services;
