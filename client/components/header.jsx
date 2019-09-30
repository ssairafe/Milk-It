import React from 'react';

function Header(props) {
  return (
    <div className="head" style={{ margin: '0' }}>
      <h1 className="page-header">Milk It</h1>
      <div onClick={() => {
        props.view('cart', { });
      }} className="col-md-3 fas fa-shopping-cart">
        <div className="cartCount">
          {props.items}
        </div>
      </div>
    </div>
  );
}

export default Header;
