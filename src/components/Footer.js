import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        {/* wrapper #1 */}
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <ul>
              <li className='list-item'>
                <a
                  href='tel:312-877-5233'
                  className='footer-icon-link'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i class='fas fa-phone'></i>
                  <p className='footer-contact-text'>312.877.5322</p>
                </a>
              </li>
              <li className='list-item'>
                <a
                  href='mailto:myemail@site.com?Subject=Some%20subject'
                  className='footer-icon-link'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i class='far fa-envelope'></i>
                  <p className='footer-contact-text'>Email</p>
                </a>
              </li>
              <li className='list-item'>
                <a
                  href='https://goo.gl/maps/HdWpKT2rb7uB2mhK6'
                  className='footer-icon-link'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i class='fas fa-map-marker-alt'></i>
                  <p className='footer-contact-text'>Location</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* wrapper #2 */}
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Useful Links</h2>
            <ul>
              <li className='list-item'>
                <a
                  href='https://codelibrary.amlegal.com/codes/chicago/latest/chicago_il/0-0-0-2480757'
                  target='_blank'
                  rel='noreferrer'
                >
                  Chicago's RLTO
                </a>
              </li>
              <li className='list-item'>
                <a href='/sign-up' rel='noreferrer'>
                  Schedule Appt.
                </a>
              </li>
              <li className='list-item'>
                <a
                  href='https://www.chicago.gov/city/en/depts/mayor/iframe/lookup_ward_and_alderman.html'
                  target='_blank'
                  rel='noreferrer'
                >
                  Find Your Alderman
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* wrapper #3 */}
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <ul>
              <li className='list-item'>
                <a
                  href='https://www.instagram.com/tenantsrightschicago/'
                  className='footer-icon-link'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i class='fab fa-instagram'></i>
                  <p className='footer-contact-text'>Instagram</p>
                </a>
              </li>
              <li className='list-item'>
                <a
                  href='https://www.facebook.com/chicagotenantsrightslaw'
                  className='footer-icon-link'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i class='fab fa-facebook-f'></i>
                  <p className='footer-contact-text'>Facebook</p>
                </a>
              </li>
              <li className='list-item'>
                <a
                  href='https://twitter.com/ChiTenantRights'
                  className='footer-icon-link'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i class='fab fa-twitter'></i>
                  <p className='footer-contact-text'>Twitter</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className='bottom'>
        <p>
          {' '}
          &copy; 2020 Chicago Tenants Rights Law. All rights reserved. Designed
          by <span>Sand + Zinc</span>
        </p>
      </section>
    </div>
  );
}

export default Footer;
