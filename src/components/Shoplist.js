import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Shoplist extends React.Component {
  constructor(props) {
    super(props);
    const { carrinho } = props;
    this.state = { carrinho };
    this.mudaQuantia = this.mudaQuantia.bind(this);
  }

  mudaQuantia(item, { target }) {
    const { carrinho } = this.state;
    // const index = carrinho.findIndex((x) => x.id === item);
    const checkCart = carrinho.find((cart) => cart.id === item);
    if (target.name === '-') {
      // contador[index] -= 1;
      checkCart.contador -= 1;
      return this.setState({ carrinho: [...carrinho] });
    }
    if (checkCart.contador < checkCart.available_quantity) {
      checkCart.contador += 1;
      this.setState({ carrinho: [...carrinho] });
    }
    // contador[index] += 1;

    // this.setState({
    //   contador,
    // });
    // console.log(contador);
    // console.log(target);
    // console.log(carrinho);
  }

  renderCarrinho(carrinho) {
    return (
      <ul>
        {carrinho.map((item, i) => (
          <section key={ i }>
            <button
              data-testid="product-decrease-quantity"
              type="button"
              name="-"
              onClick={ (event) => this.mudaQuantia(item.id, event) }
            >
              -
            </button>
            <button
              data-testid="product-increase-quantity"
              type="button"
              name="+"
              onClick={ (event) => this.mudaQuantia(item.id, event) }
            >
              +
            </button>
            <li key={ item.id } data-testid="shopping-cart-product-name">
              {item.title}
            </li>
            <span data-testid="shopping-cart-product-quantity">
              {item.contador}
            </span>
          </section>
        ))}
      </ul>);
  }

  render() {
    const { carrinho } = this.state;
    const carrinhoFinal = { carrinho };
    const { getCartItems } = this.props;
    if (carrinho.length === 0) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      <div>
        <span>
          Items no Carrinho:
          {carrinho.length}
        </span>
        {this.renderCarrinho(carrinho)}
        <Link
          data-testid="checkout-products"
          to="/finalizarCompra"
          onClick={ () => getCartItems(carrinhoFinal) }
        >
          Finalizar compra
        </Link>

      </div>
    );
  }
}

Shoplist.propTypes = {
  carrinho: PropTypes.arrayOf(PropTypes.object).isRequired,
  getCartItems: PropTypes.func.isRequired,
};

export default Shoplist;
