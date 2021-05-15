// Brian
import React from 'react';
import '../../App.css';
import './SignUp.css';

function SignUp() {
  return (
    <div className='iframe-container'>
      <div style={{ textAlign: 'center' }} className='container'>
        {/* ^ centers the entire iframe :) */}
        <div className-='iframe'>
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

export default SignUp;
