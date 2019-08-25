import React from 'react';
import ProductItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.getItems();

  }

  getItems() {
    fetch('/api/products.php').then(response => {
      return response.json();
    }).then(result => {
      this.setState({
        products: result
      });
    });
  }

  render() {
    const renderingItems = this.state.products.map(item => {
      return (
        <div style={{ 'width': '15rem' }} onClick={() => {
          this.props.view('details', { id: item.ID });
        }} className="col-md-3" key={item.ID}>
          <ProductItem image={item.image} name={item.name} id={item.ID} />
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {renderingItems}
        </div>
      </div>
    );
  }
}

export default ProductList;
