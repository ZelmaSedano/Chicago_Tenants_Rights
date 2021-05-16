import React from 'react';
import './About.css';
// images
import Staff from './images/img-13.png';

function About() {
  return (
    <div className='about' id='section2'>
      <div className='header-text'>
        <h1>
          OUR <span>STORY</span>
        </h1>
      </div>

      <div className='about-container'>
        <div className='about-wrapper'>
          <div className='text-and-pic-wrapper'>
            <img src={Staff} alt='charles-and-staff'></img>
          </div>
          <p>
            Attorney Charles Drennen has earned a sterling reputation amongst
            clients, peers, and judges alike as one of the hardest-working and
            most visible attorneys on the Daley Center's 13th and 14th floors.
            Compelled by a belief in public service, advocacy, and in fighting
            for the underdog in any given situation, he understands the nuances
            of the law and work to read the subtext of every client's situation.{' '}
          </p>
          {/* line break */}
          <br></br>
          <p>
            We believe strongly in the centrality of personal relationships as
            the cornerstone of our professional life and work with many
            community organizations to help enhance the lives of all Chicago
            communities. As a featured guest lecturer at venues such as the
            Loyola School of Business, John Marshall Law School, and LIFT Annual
            Summits, Charles enjoys a lasting relationship with these
            organizations and the people they serve. We are continuing our work
            as a LIFT supporter and enjoy a strong relationship with many
            members of their staff and clients.
          </p>
        </div>
        {/* line break */}
        <br></br>
        <p className='bottom'>
          <span>Tenants Rights Law</span> can provide you with comprehensive
          legal support allowing us to advocate for you in many areas of law.
          Take control of your life with CTRL!
        </p>
      </div>
    </div>
  );
}

export default About;
