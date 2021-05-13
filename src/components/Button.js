import React from 'react';
import './Button.css';
// Links are <a> tags that use to= instead of href=
import { Link } from 'react-router-dom';

// Array of styles to default to if a Button doesn't have any custom styling
const STYLES = ['btn--primary', 'btn--red', 'btn--outline', 'btn--test'];
// same as above, but for sizing
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  // function that checks to see if the Button tag in Navbar.js has custom styling
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  // if there is no custom styling or sizing, use the default styles which are [0] in arrays
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/sign-up' className='btn-mobile'>
      {/* ${checking} styles & sizes with function */}
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {/* children = whatever custom text you have b/w <Button> </Button> tags */}
        {children}
      </button>
    </Link>
  );
};
