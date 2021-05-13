// Brian
import React from 'react';
import Navbar from '../Navbar';
import '../../App.css';

function SignUp() {
  return (
    <div className='container'>
      <Navbar />
      <div className='iframe'>
        <iframe
          src='https://app.squarespacescheduling.com/schedule.php?owner=22966986'
          title='Schedule Appointment'
          width='100%'
          height='600'
          frameBorder='0'
        ></iframe>
        <script
          src='https://embed.acuityscheduling.com/js/embed.js'
          type='text/javascript'
        ></script>
      </div>
    </div>
  );
}

export default SignUp;
