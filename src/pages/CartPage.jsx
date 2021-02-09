import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// import { parseCart } from '../services/api';
import CartItem from '../components/CartItem';

class CartPage extends React.Component {
  constructor() {
    super();

    this.state = {
      list: [],
    };

    this.loadCart = this.loadCart.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.remProduct = this.remProduct.bind(this);
  }

  componentDidMount() {
    const { list } = this.state;
    if (list.length === 0) {
      this.loadCart();
    }
  }

  addProduct(product) {
    // console.log('+', product.id);
    const { list } = this.state;
    const aux = [...list];
    const index = aux.findIndex((i) => i.id === product.id);
    aux[index].quantity += 1;
    this.setState({
      list: aux,
    });
  }

  remProduct(product) {
    // console.log('-', product);
    if (product.quantity > 0) {
      const { list } = this.state;
      const aux = [...list];
      const index = aux.findIndex((i) => i.id === product.id);
      aux[index].quantity -= 1;
      this.setState({
        list: aux,
      });
    }
  }

  parseCart(cart) {
    if (!cart) return [];
    return cart.reduce((a, c) => {
      const index = a.findIndex((i) => i.id === c.id);
      if (index >= 0) {
        a[index].quantity += 1;
      } else {
        a.push({ ...c, quantity: 1 });
      }
      return a;
    }, []);
  }

  loadCart() {
    const { cart } = this.props;
    // console.log(cart);
    this.setState({
      list: this.parseCart(cart),
    });
  }

  render() {
    const { list } = this.state;
    return (
      <section>
        <Link to="/">Home</Link>
        { list.length > 0 ? list.map((res) => (
          <CartItem
            key={ res.id }
            id={ res.id }
            title={ res.title }
            quantity={ res.quantity }
            handleAdd={ () => this.addProduct(res) }
            handleRem={ () => this.remProduct(res) }
          />
        )) : (<h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>)}
      </section>
    );
  }
}

CartPage.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string,
      title: PropTypes.string,
    },
  )).isRequired,
};

export default CartPage;
