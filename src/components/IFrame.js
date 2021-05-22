import React from 'react';

import '../App.css';
import './IFrame.css';

function IFrame() {
  return (
    <div className='signup-page-container'>
      <div className='iframe-header-text'>
        <h1></h1>
      </div>
      <div className='iframe-container'>
        <div style={{ textAlign: 'center' }} className='iframe-wrapper'>
          {/* ^ centers the entire iframe :) */}
          <iframe
            src='https://app.squarespacescheduling.com/schedule.php?owner=22966986'
            title='Schedule Appointment'
            width='90%'
            height='2450'
            frameBorder='0'
          ></iframe>
          <script
            src='https://embed.acuityscheduling.com/js/embed.js'
            type='text/javascript'
          ></script>
        </div>
      </div>
    </div>
  );
}

export default IFrame;
