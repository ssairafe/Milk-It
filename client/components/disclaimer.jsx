import React from 'react';

export default function DisclaimerModal(props) {
  return (
    <div className="modalBack">
      <div className="container modalOrder">
        <h1 style={{ color: 'white', fontSize: '4rem' }}>This website is for presentation purposes. Nothing is sold here.</h1>
        <h2 onClick={() => {
          props.view('catalog');
        }} style={{ cursor: 'pointer', color: 'white' }}>Click here to continue</h2>
      </div>
    </div>
  );
}
