import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummaryItems from './cart-summary-items';
import CheckoutForm from './checkout';
import OrderModal from './order-modal';
import DisclaimerModal from './disclaimer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'disclaimer',
        params: {}
      },
      cart: []

    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.clearCart = this.clearCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.setCart = this.setCart.bind(this);
  }

  componentDidMount() {
    this.getCartItems();

  }

  placeOrder(buyerInfo) {
    let orderInfo = {
      name: buyerInfo.name,
      creditCard: buyerInfo.creditCard,
      shippingAddress: buyerInfo.shippingAddress,
      order: this.state.cart
    };
    fetch('/api/orders.php', {
      method: 'POST',
      body: JSON.stringify(orderInfo)
    }).then(response => {
      return response.json();
    }).then(response => {
      this.setState({
        cart: [],
        view: {
          name: 'orderSubmitted',
          params: {}
        }
      });
    });
  }

  clearCart(product) {
    fetch('/api/cart.php/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json();
    });
  }

  removeFromCart(product) {
    fetch('/api/cart.php/?id=' + product.id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    }).then(response => {
      return response.json();
    }).then(response => {
      this.setState({
        cart: response
      });
    });
  }

  addToCart(product) {
    fetch('/api/cart.php/' + product.id, {
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
    }).then(() => this.getCartItems());
  }

  getCartItems() {
    fetch('/api/cart.php').then(result => {
      return result.json();
    })
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

  setCart(value) {
    this.setState({
      cart: value
    });
  }

  render() {
    if (this.state.view.name === 'details') {
      return (
        <div>
          <Header view={this.setView} items={this.state.cart.length}/>
          <ProductDetails view={this.setView} id={this.state.view.params.id} add={this.addToCart}/>
        </div>
      );
    } else if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header view={this.setView} items={this.state.cart.length}/>
          <ProductList view={this.setView} />
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div>
          <Header view={this.setView} items={this.state.cart.length} />
          <CartSummaryItems refreshCart={this.setCart} delete={this.removeFromCart} view={this.setView} items={this.state.cart} clear={this.clearCart} />
        </div>
      );
    } else if (this.state.view.name === 'checkout') {
      return (
        <>
        <div>
          <Header view={this.setView} items={this.state.cart.length} />
        </div>
        <div className="container">
          <CheckoutForm placeOrder={this.placeOrder}/>
        </div>
        </>
      );
    } else if (this.state.view.name === 'disclaimer') {
      return (
        <>
          <div>
            <Header view={this.setView} items={this.state.cart.length} />
          </div>
          <DisclaimerModal view={this.setView} />
        </>
      );
    } else if (this.state.view.name === 'orderSubmitted') {
      return (
        <>
          <div>
            <Header view={this.setView} items={this.state.cart.length} />
          </div>
          <div className="container">
            <CheckoutForm placeOrder={this.placeOrder} />
          </div>
          <OrderModal view={this.setView} clearData={this.clearCart}/>
        </>
      );
    }
  }
}
