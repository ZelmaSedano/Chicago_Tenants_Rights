// this is the Cards Section, much like the Hero Section
import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className='services-container'>
      <div className='services-wrapper'>
        <div className='services-header'>
          <h1 className='services-h1'>
            Other services include, but are not limited to:
          </h1>
          <br />
        </div>

        {/* List of Services *****************/}
        <div class='list-container'>
          <div class='list-wrapper'>
            <div class='row'>
              {/* Card 1 */}
              <div class='card'>
                <div class='card-wrapper'>
                  {/* <!-- icon wrapper --> */}
                  <div class='icon-wrapper'>
                    <i class='fas fa-archway'></i>
                  </div>
                  {/* <!-- text-wrapper --> */}
                  <div class='text-wrapper'>
                    <h2>Criminal Defense</h2>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div class='card'>
                <div class='card-wrapper'>
                  <div class='icon-wrapper'>
                    <i class='fas fa-gavel'></i>
                  </div>
                  <div class='text-wrapper'>
                    <h2>Sunmetecha</h2>
                  </div>
                  <div class='btn-div'></div>
                </div>
              </div>

              {/* Card 3 */}
              <div class='card'>
                <div class='card-content'>
                  <div class='icon-wrapper'>
                    <i class='fas fa-balance-scale'></i>
                  </div>
                  <div class='text-wrapper'>
                    <h2>Sunmetecha</h2>
                  </div>
                  <div class='btn-div'></div>
                </div>
              </div>

              {/* Card 4 */}
              <div class='card'>
                <div class='card-content'>
                  <div class='icon-wrapper'>
                    <i class='fas fa-car-side'></i>
                  </div>
                  <div class='text-wrapper'>
                    <h2>Sunmetecha</h2>
                  </div>
                  <div class='btn-div'></div>
                </div>
              </div>

              {/* Card 5 */}
              <div class='card'>
                <div class='card-content'>
                  <div class='icon-wrapper'>
                    <i class='fas fa-home'></i>
                  </div>
                  <div class='text-wrapper'>
                    <h2>Sunmetecha</h2>
                  </div>
                  <div class='btn-div'></div>
                </div>
              </div>

              {/* Card 6 */}
              <div class='card'>
                <div class='card-content'>
                  <div class='icon-wrapper'>
                    <i class='fas fa-archway'></i>
                  </div>
                  <div class='text-wrapper'>
                    <h2>Sunmetecha</h2>
                  </div>
                  <div class='btn-div'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END List of Services */}

        <div className='services-bottom-text'>
          <h3 className='bottom-h3'>We offer free inital consultations!</h3>
          {/* <h2>
              Save 25-35% when you BOOK ONLINE & Complete the Intake Form!
            </h2> */}
        </div>
        {/* END Services Section */}
      </div>
    </div>
  );
}

export default Services;
