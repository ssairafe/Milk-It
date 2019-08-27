import React from 'react';

function Header(props) {
  return (
    <div className="head container-fluid mb-3">
      <div className="row blankHead"></div>
      <div className="row">
        <div className="col-md-3">
          <h1 className="page-header" style={{ 'fontFamily': 'Lobster, cursive' }}>Wicked Sales</h1>
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-3"></div>
        <div onClick={() => {
          props.view('cart', { });
        }} className="col-md-3 fas fa-shopping-cart">
          <div className="cartCount">
            {props.items}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
