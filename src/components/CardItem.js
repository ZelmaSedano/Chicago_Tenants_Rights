import React from 'react';
import { Link } from 'react-router-dom';

// props allows you to insert custom src, text, label, and path from Occurrence
function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        {/* props.path allows you to set custom path in Occurrence */}
        <Link className='cards__item__link' to={props.path}>
          {/* props.label allows you to set custom label in Occurrence */}
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            {/* props.src allows you to set custom image src in Occurrence */}
            <img src={props.src} className='cards__item__img' alt='Services' />
          </figure>
          <div className='cards__item__info'>
            {/* props.text allows you to set custom text in Occurrence */}
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
