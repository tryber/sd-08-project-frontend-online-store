import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Shoplist extends React.Component {
  constructor(props) {
    super(props);
    const { carrinho, contador } = props;
    this.state = { carrinho, contador };
    this.mudaQuantia = this.mudaQuantia.bind(this);
  }

  mudaQuantia(item, { target }) {
    const { contador, carrinho } = this.state;
    const index = carrinho.findIndex((x) => x.id === item);
    if (target.name === '-') {
      contador[index] -= 1;
    } else {
      contador[index] += 1;
    }
    this.setState({
      contador,
    });
    // console.log(contador);
    // console.log(target);
    // console.log(carrinho);
  }

  renderCarrinho(carrinho, contador) {
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
              {contador[i]}
            </span>
          </section>
        ))}
      </ul>);
  }

  render() {
    const { carrinho } = this.state;
    const { contador } = this.state;
    const carrinhoFinal = { carrinho, contador };
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
        {this.renderCarrinho(carrinho, contador)}
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
  contador: PropTypes.arrayOf(PropTypes.number).isRequired,
  getCartItems: PropTypes.func.isRequired,
};

export default Shoplist;
