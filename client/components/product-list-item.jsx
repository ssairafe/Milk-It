import React from 'react';

function ProductItem(props) {

  let cardTitleClass = 'card-body' + ' ' + props.name + '-title';
  return (
    <div className="card" style={{ marginTop: '20%', 'width': '15rem', border: 'none', verticalAlign: 'text-bottom' }} >
      <img className="card-img-top" id={props.name} style={{ 'height': '12rem' }} image={props.image} src={props.image} alt="Image Not Found"/>
      <div className={cardTitleClass}>
        <h5 className="card-title" name= {props.name}>{props.name}</h5>
      </div>
      <div className="mobileCardTitle">{props.name}</div>
    </div>
  );
}

export default ProductItem;
