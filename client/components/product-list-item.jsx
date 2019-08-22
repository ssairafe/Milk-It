import React from 'react';

function ProductItem(props) {
  return (
    <div className="card" key={props.id} style={{ 'width': '18rem' }} >
      <img className="card-img-top" style={{ 'height': '15rem' }} image={props.image} src={props.image} alt="Image Not Found"/>
      <div className="card-body">
        <h5 className="card-title" name= {props.name}>{props.name}</h5>
        <p className="card-text">A product you want and need to buy</p>
        <a href="#" className="btn btn-primary">Buy This Illegal Stuff</a>
      </div>
    </div>
  );
}

export default ProductItem;
