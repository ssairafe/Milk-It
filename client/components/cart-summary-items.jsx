import React from 'react';

function CartSummaryItems(props) {
  let itemToDelete = null;
  let deleteButtons = document.getElementsByClassName('confirmRemoveButton');
  let grandTotal = 0;
  const renderingItems = props.items.map(item => {
    let sum = item.price * item.count;
    grandTotal = grandTotal + sum;
    return (
      <div className="cartProduct row" key={item.id}>
        <div style={{ 'textAlign': 'center' }} className="m-2 col-md">
          <img className="cartProductImage" style={{ 'height': '12rem', 'width': '16rem' }} src={item.image}/>
        </div>
        <div className="col-md">
          <div className="cartProductInfo m-2 row">{item.name}</div>
          <div className="cartProductInfo m-2 row">Quantity: {item.count}</div>
          <div className="cartProductInfo m-2 row">{('$' + (item.price / 100).toFixed(2))}</div>
          <div className="cartProductInfo m-2 row">{item.shortDescription}</div>
          <div className="m-2 row removeButton" onClick={() => {
            if (itemToDelete) {
              for (let i = 0; i < deleteButtons.length; i++) {
                deleteButtons[i].style.display = 'none';
                itemToDelete = null;
              }
            } else {
              itemToDelete = document.getElementById(item.id + '');
              itemToDelete.style.display = 'block';
            }
          }}>Remove Item
          </div>
        </div>
        <div id={item.id + ''} className="confirmRemoveButton">
          <div className="confirmInner">
            <span id="uSure">Are you sure?&nbsp;</span>
            <span id="yes" style={{ cursor: 'pointer' }} onClick={() => {
              props.delete(item);
            }}>Yes</span>
            /
            <span id="no" style={{ cursor: 'pointer' }} onClick={() => {
              itemToDelete.style.display = 'none';
              itemToDelete = null;
            }} >No</span>
          </div>
        </div>
      </div>
    );
  });

  if (grandTotal === 0) {
    return (
      <>
      <a className="backToCatalog" onClick={() => {
        props.view('catalog', {});
      }} href="#" style={{ fontFamily: 'Lobster, cursive', marginLeft: '1rem', marginTop: '3rem', color: 'black', border: 'none' }} >&#60;- Back to Catalog
      </a>
      <div className="container-fluid" style={{ marginTop: '15%' }}>
        <div style={{ 'fontFamily': 'Lobster, cursive' }} className="row wickedCart">
          <div className="col"></div>
          <div className="cartTitle col">Your Cart Is Empty</div>
          <div className="col" >
          </div>
        </div>
      </div>
      </>
    );
  } else {
    return (
      <>
        <a className="backToCatalog" onClick={() => {
          props.view('catalog', {});
        }} href="#" style={{ fontFamily: 'Lobster, cursive', marginLeft: '1rem', marginTop: '3rem', color: 'black', border: 'none' }} >&#60;- Back to Catalog
        </a>
        <div className="container-fluid">
          <div style={{ 'fontFamily': 'Lobster, cursive' }} className="row wickedCart">
            <div className="col"></div>
            <div className="cartTitle col">Your Milk</div>
            <div className="col" >
              <a onClick={() => {
                props.clear();
                props.refreshCart([]);
              }} href="#" style={{ 'backgroundColor': 'black', 'color': 'white', border: 'none', marginLeft: '1rem', marginTop: '1rem' }} className="btn btn-primary mb-3"> Clear Cart
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          {renderingItems}
          <div className="row">
            <div className="col-md"></div>
            <div className="col-md"></div>
            <div className="col-md">
              <div className="cartTotal row">
                Your Total: {('$' + (grandTotal / 100).toFixed(2))}
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
}

export default CartSummaryItems;
