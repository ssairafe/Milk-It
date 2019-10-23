import React from 'react';

export default function OrderModal(props) {
  return (
    <div className="modalBack">
      <div className="container modalOrder">
        <h1 style={{ color: 'white', fontSize: '5rem' }}>We have received your order, thank you!</h1>
        <h2 onClick={() => {
          props.clearData();
          props.view('catalog');
        }} style={{ cursor: 'pointer', color: 'white' }}>Click here to return home</h2>
      </div>
    </div>
  );
}
