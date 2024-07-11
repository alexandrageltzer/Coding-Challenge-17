
import React from 'react';
import './FancyText.css'; // Import CSS file for styling

const FancyText = ({ title, text }) => {
  return (
    <div className={title ? 'title-text' : 'regular-text'}>
      {title ? <h1>{text}</h1> : <p>{text}</p>}
    </div>
  );
};

export default FancyText;
