import React from 'react';

function CartSummaryItems(props) {
  const renderingItems = props.items.map(item => {
    return (
      <div className="row" key={item.id}>
        <div style={{ 'textAlign': 'center' }} className="m-2 col-md">
          <img style={{ 'height': '12rem', 'width': '16rem' }} src={item.image}/>
        </div>
        <div className="col-md">
          <div className="m-2 row">{item.name}</div>
          <div className="m-2 row">{('$' + (item.price / 100).toFixed(2))}</div>
          <div className="m-2 row">{item.shortDescription}</div>
        </div>
      </div>
    );
  });

  return (
    <>
      <a onClick={() => {
        props.view('catalog', {});
      }} href="#" style={{ 'backgroundColor': 'black', 'color': 'white', border: 'none', marginLeft: '1rem', marginTop: '1rem' }} className="btn btn-primary mb-3">&#60;- Back to Catalog
      </a>
      <div style={{ 'fontFamily': 'Lobster, cursive' }} className="row wickedCart">
        <div className="col"></div>
        <div className="col">Your Milk</div>
        <div className="col"></div>
      </div>
      <div className="container">
        {renderingItems}
        <div className="row">
          <div className="col-md"></div>
          <div className="col-md"></div>
          <div className="col-md">
            <div className="row">
               Your Total: {props.total}
            </div>
            <div className="row">
              <a onClick={() => {
                props.view('checkout', {});
              }} href="#" style={{ 'backgroundColor': 'black', 'color': 'white', 'float': 'right', border: 'none' }} className="btn btn-primary mb-3">Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartSummaryItems;
