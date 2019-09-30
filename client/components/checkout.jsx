import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.placeOrder(this.state);
  }

  render() {
    return (
      <>
      <div className="row" style={{ 'height': '6rem' }}></div>
      <div className="container" style={{ 'border': '1px solid black', 'backgroundColor': 'silver', 'width': '50%', 'textAlign': 'center' }}>
        <form className="form-group" onSubmit={this.handleSubmit} >
          <div>
            <label htmlFor="">
              <div className="row">
          Name:
                <input className="form-control" name="name" value={this.state.name} required autoFocus onChange={this.handleChange}/>
              </div>
            </label>
          </div>
          <div>
            <label htmlFor="">
              <div className="row">
          Card Number:
                <input className="form-control" name="creditCard" value={this.state.creditCard} required autoFocus onChange={this.handleChange}/>
              </div>
            </label>
          </div>
          <div>
            <label htmlFor="">
              <div className="row">
          Shipping Address:
                <textarea className="form-control" name="shippingAddress" value={this.state.shippingAddress} required autoFocus onChange={this.handleChange}/>
              </div>
            </label>
          </div>
          <button type='submit'>Place Order</button>
        </form>
      </div>
      </>
    );
  }

}

export default CheckoutForm;
