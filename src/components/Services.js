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
            <p>Our services include but are not limited to:</p>
            <br />
          </div>

          {/* List of Services */}
          <div className='list-container'>
            <div className='list-wrapper'>
              {/* Card #1 */}

              {/* W3Schools: Card Item */}
              <div className='list-item'>
                {/* added b/c list-item has a margin, so can't use margin: 0 auto to center circle */}
                <div className='list-item-wrapper'>
                  <Link to='/sign-up'>
                    <div id='circle'>
                      <i class='fas fa-search'></i>
                    </div>
                  </Link>

                  <div class='list-item-text'>
                    <h4>Project</h4>
                    <p>
                      I also do one-off projects and have ongoing corporate
                      retainer clients. Want to work together? Let's chat!
                    </p>
                  </div>
                </div>
              </div>

              {/* Card #2 */}
              <div className='list-item'>
                {/* added b/c list-item has a margin, so can't use margin: 0 auto to center circle */}
                <div className='list-item-wrapper'>
                  <Link to='/sign-up'>
                    <div id='circle'>
                      <i class='fas fa-search'></i>
                    </div>
                  </Link>

                  <div class='list-item-text'>
                    <h4>Project</h4>
                    <p>
                      I also do one-off projects and have ongoing corporate
                      retainer clients. Want to work together? Let's chat!
                    </p>
                  </div>
                </div>
              </div>

              <div className='list-item'>
                {/* added b/c list-item has a margin, so can't use margin: 0 auto to center circle */}
                <div className='list-item-wrapper'>
                  <Link to='/sign-up'>
                    <div id='circle'>
                      <i class='fas fa-search'></i>
                    </div>
                  </Link>

                  <div class='list-item-text'>
                    <h4>Project</h4>
                    <p>
                      I also do one-off projects and have ongoing corporate
                      retainer clients. Want to work together? Let's chat!
                    </p>
                  </div>
                </div>
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

export default Services;
