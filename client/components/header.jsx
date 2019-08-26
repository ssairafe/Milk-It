import React from 'react';

function Header(props) {
  return (
    <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-md-3">
          <h1 className="page-header" >Wicked Sales</h1>
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-3"></div>
        <div className="col-md-3 cart">
          {props.items}
        </div>
      </div>
    </div>
  );
}

export default Header;
