import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    const { location = {} } = this.props;
    const { cart = 0 } = location;

    this.state = {
      quantity: [],
      cart,
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
  }

  componentDidMount() {
    // const { cart } = this.state;
    this.handleQuantity().then((arr) => {
      this.setState({ quantity: arr });
    });
  }

  async handleQuantity() {
    const { cart } = this.state;
    const arr = [];
    for (let index = 0; index < cart.length; index += 1) {
      arr[index] = 1;
    }
    return arr;
  }

  increase(index) {
    let flag = false;
    this.setState((prevState) => {
      flag = !flag;
      if (flag) {
        prevState.quantity[index] += 1;
      }
      return { quantity: prevState.quantity };
    });
  }

  decrease(index) {
    let flag = false;
    this.setState((prevState) => {
      flag = !flag;
      if (flag) {
        prevState.quantity[index] -= 1;
      }
      return { quantity: prevState.quantity };
    });
  }

  render() {
    const { quantity, cart } = this.state;
    if (cart === 0 || !cart || cart === [] || cart.length <= 0) {
      return (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    console.log('saida do increase e decrease', quantity);
    return (
      <div>
        {cart.map((product, index) => (
          <div key={ index }>
            <img src={ product.thumbnail } alt={ product.title } />
            <h3 data-testid="shopping-cart-product-name">{product.title}</h3>

            <button
              data-testid="product-increase-quantity"
              value={ index }
              type="button"
              onClick={ () => this.increase(index) }
            >
              +
            </button>
            <p data-testid="shopping-cart-product-quantity">{ quantity[index] }</p>
            <button
              data-testid="product-decrease-quantity"
              value={ index }
              type="button"
              onClick={ () => this.decrease(index) }
            >
              -
            </button>
          </div>
        ))}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    cart: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default ShoppingCart;
