import React from 'react';

function ProductItem(props) {
  return (
    <div className="card" style={{ marginTop: '20%', 'width': '15rem', border: 'none' }} >
      <img className="card-img-top" style={{ 'height': '12rem' }} image={props.image} src={props.image} alt="Image Not Found"/>
      <div className="card-body">
        <h5 className="card-title" name= {props.name}>{props.name}</h5>
      </div>
    </div>
  );
}

export default ProductItem;
