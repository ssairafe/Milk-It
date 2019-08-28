import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummaryItems from './cart-summary-items';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []

    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.grandTotal = this.grandTotal.bind(this);
  }

  componentDidMount() {
    this.getCartItems();

  }

  addToCart(product) {
    fetch('/api/cart.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    }).then(response => {
      return response.json();
    }).then(product => {
      this.setState({
        cart: this.state.cart.concat(product)
      });
    });
  }

  getCartItems() {
    fetch('/api/cart.php').then(result => result.json())
      .then(result => {
        this.setState({
          cart: result
        });
      });
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }

    });
  }

  grandTotal() {
    let total = 0;
    for (let i = 0; i < this.state.cart.length; i++) {
      let price = parseInt(this.state.cart[i].price);
      total = total + price;

    }
    total = (total / 100).toFixed(2);
    return '$' + total;
  }

  render() {
    if (this.state.view.name === 'details') {
      return (
        <div className="container-fluid">
          <Header view={this.setView} items={this.state.cart.length}/>
          <ProductDetails view={this.setView} id={this.state.view.params.id} add={this.addToCart}/>
        </div>
      );
    } else if (this.state.view.name === 'catalog') {
      return (
        <div className="container-fluid">
          <Header view={this.setView} items={this.state.cart.length}/>
          <ProductList view={this.setView} />
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div className="container-fluid">
          <Header view={this.setView} items={this.state.cart.length} />
          <CartSummaryItems total={this.grandTotal()} view={this.setView} items={this.state.cart} />
        </div>
      );
    }
  }
}
