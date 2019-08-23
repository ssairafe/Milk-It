import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    this.getId(this.state.product);

    // this.getFixedCost();
  }

  // getFixedCost() {
  //   let product = this.state.product;
  //   product.price = product.price.toFixed(2);
  //   this.setState({
  //     product: product
  //   });
  // }

  getId(id) {
    fetch('/api/products.php?id=' + id).then(response => response.json())
      .then(response => {
        response.price = response.price / 100;
        this.setState({
          product: response
        })
        ;
      });
  }

  render() {

    if (!this.state.product) {
      return <div></div>;
    }
    return (
      <div className="container">
        <div className="row">
          <img style={{ 'width': '20rem' }} image={this.state.product.image} src={this.state.product.image}/>
          <div className="col-md-3">
            <h1>{this.state.product.name}</h1>
            <h2>{this.state.product.price}</h2>
            {this.state.product.shortDescription}
          </div>
        </div>
        <div style={{ 'height': '2rem' }} className="row"></div>
        <div className="row">{this.state.product.longDescription}</div>
        <div style={{ 'height': '1rem' }} className="row"></div>
        <a onClick={() => {
          this.props.view('catalog', { item: this.state.product });
        }} href="#" className="btn btn-primary">Back to Catalog</a>
      </div>

    );
  }

}

export default ProductDetails;
