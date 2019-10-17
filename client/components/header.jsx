import React from 'react';

function Header(props) {
  return (
    <div className="head" style={{ margin: '0' }}>
      <img className="logo" src='https://img.pngio.com/cow-udders-png-transparent-cow-udderspng-images-pluspng-udder-png-300_300.png'></img>
      <h1 className="page-header">Milk It</h1>
      <div style={{ cursor: 'pointer' }} onClick={() => {
        props.view('cart', { });
      }} className=" fas fa-shopping-cart">
        <div className="cartCount">
          {props.items}
        </div>
      </div>
    </div>
  );
}

export default Header;
