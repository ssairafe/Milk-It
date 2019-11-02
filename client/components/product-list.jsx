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
        <div className="itemHolder" style={{ 'width': '15rem', marginRight: '15%' }} onClick={() => {
          this.props.view('details', { id: item.id });
        }} key={item.id}>
          <ProductItem image={item.image} name={item.name} id={item.id} />
        </div>
      );
    });

    return (
      <div className="container-fluid">
        <div className="row listBackground">
          {renderingItems}
        </div>
      </div>
    );
  }
}

export default ProductList;
