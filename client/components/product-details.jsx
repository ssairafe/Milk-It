import React from 'react';
class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      addedToCart: false
    };
    this.getCountMinus = this.getCountMinus.bind(this);
    this.getCountPlus = this.getCountPlus.bind(this);
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

  getCountPlus() {
    let tempProduct = this.state.product;
    tempProduct.counter = parseInt(tempProduct.counter);
    tempProduct.counter = tempProduct.counter + 1;

    this.setState({
      product: tempProduct
    });
  }

  getCountMinus() {
    if (this.state.product.counter < 2) {
      return null;
    } else {
      let tempProduct = this.state.product;
      tempProduct.counter = parseInt(tempProduct.counter);
      tempProduct.counter = tempProduct.counter - 1;

      this.setState({
        product: tempProduct
      });
    }
  }

  render() {
    if (!this.state.product) {
      return <div></div>;
    }
    return (
      <>
        <a className="backToCatalog" onClick={() => {
          this.props.view('catalog', { id: this.state.product });
        }} href="#" style={{ fontFamily: 'Lobster, cursive', marginLeft: '1rem', marginTop: '3rem', color: 'black', border: 'none' }} >&#60;- Back to Catalog
        </a>
        <div className="container">
          <div style={{ display: 'inline-block' }}>
            <img className='prodInfoImage' style={{ 'width': '20rem' }} image={this.state.product.image} src={this.state.product.image}/>
          </div>
          <div className="detailsBackground" style={{ width: '40%', marginLeft: '10%', display: 'inline-block', verticalAlign: 'bottom' }}>
            <h1 className="productName">{this.state.product.name}</h1>
            <h2>{'$' + (this.state.product.price / 100).toFixed(2)}</h2>
            {this.state.product.shortDescription}
            <div>
              <button onClick={() => {
                this.props.add(this.state.product);
                this.setState({
                  addedToCart: true
                });
                setTimeout(() => {
                  this.setState({
                    addedToCart: false
                  });
                }, 1000);
              }} href="#" className="btn btn-primary mb-4" style={{ border: 'none', backgroundColor: 'black', marginTop: '5%' }}>Add to Cart
              </button>
              {this.state.product.name === 'Lioness-Milk' ? <div id="lionCounter" style={{ position: 'absolute', display: 'inline-block', marginLeft: '10%' }}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <h3 className="countButton" onClick={() => { this.getCountPlus(); }} style={{ position: 'relative', display: 'inline-block', transform: 'rotate(180deg)', top: '15px', cursor: 'pointer' }}>v</h3>
                  <h3 className="countButton" onClick={() => { this.getCountMinus(); }} style={{ position: 'relative', display: 'block', cursor: 'pointer' }}>v</h3>
                </div>
                <div id="productCounter" style={{ position: 'relative', display: 'inline-block', left: '5%' }}>
                  {this.state.product.counter}
                </div>
              </div> : this.state.product.name === 'Goat-Milk'
                ? <div id="goatCounter" style={{ position: 'absolute', display: 'inline-block', marginLeft: '10%' }}>
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <h3 className="countButton" onClick={() => { this.getCountPlus(); }} style={{ position: 'relative', display: 'inline-block', transform: 'rotate(180deg)', top: '15px', cursor: 'pointer' }}>v</h3>
                    <h3 className="countButton" onClick={() => { this.getCountMinus(); }} style={{ position: 'relative', display: 'block', cursor: 'pointer' }}>v</h3>
                  </div>
                  <div id="productCounter" style={{ position: 'relative', display: 'inline-block', left: '5%' }}>
                    {this.state.product.counter}
                  </div>
                </div>
                : <div id="arrowHolder" style={{ position: 'absolute', display: 'inline-block', marginLeft: '10%' }}>
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <h3 className="countButton" onClick={() => { this.getCountPlus(); }} style={{ position: 'relative', display: 'inline-block', transform: 'rotate(180deg)', top: '15px', cursor: 'pointer' }}>v</h3>
                    <h3 className="countButton" onClick={() => { this.getCountMinus(); }} style={{ position: 'relative', display: 'block', cursor: 'pointer' }}>v</h3>
                  </div>
                  <div id="productCounter" style={{ position: 'relative', display: 'inline-block', left: '5%' }}>
                    {this.state.product.counter}
                  </div>
                </div>}
              {this.state.addedToCart === true ? <div style={{ position: 'absolute', fontFamily: 'Staatliches, cursive', fontSize: '2rem' }}>Added to Cart!</div> : ''}
            </div>
          </div>
        </div>
        <div style={{ 'height': '2rem' }}></div>
        <div className="container-fluid">
          <div className="container">
            <div className="prodDetails">{this.state.product.longDescription}</div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductDetails;
