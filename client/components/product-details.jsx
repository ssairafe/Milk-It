import React from 'react';
import Header from './header';
class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    fetch('/api/products.php?id=' + this.props.id).then(response => response.json())
      .then(response => {
        this.setState({
          product: response
        });
      });
  }

  render() {

    if (!this.state.product) {
      return <div></div>;
    }
    return (
      <div className="container-fluid">
        <Header />
        <a onClick={() => {
          this.props.view('catalog', { id: this.state.product });
        }} href="#" className="btn btn-primary mb-4">&#60;- Back to Catalog</a>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <img style={{ 'width': '20rem' }} image={this.state.product.image} src={this.state.product.image}/>
          </div>
          <div className="col-md-3">
            <h1>{this.state.product.name}</h1>

            <h2>{'$' + (this.state.product.price / 100).toFixed(2)}</h2>
            {this.state.product.description}
          </div>
        </div>
        <div style={{ 'height': '2rem' }} className="row"></div>
        <div className="container">
          <div className="row">{this.state.product.longDescription}</div>
        </div>
        <div style={{ 'height': '1rem' }} className="row">
          <a onClick={() => {
            this.props.add(this.state.product);
          }} href="#" className="btn btn-primary mb-4">Add to Cart</a>
        </div>
      </div>

    );
  }

}

export default ProductDetails;
