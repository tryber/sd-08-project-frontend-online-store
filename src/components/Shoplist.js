import React from 'react';
import PropTypes from 'prop-types';

class Shoplist extends React.Component {
  constructor(props) {
    super(props);
    const { carrinho, contador } = props;
    this.state = { carrinho, contador };
    console.log(this.state);
    this.mudaQuantia = this.mudaQuantia.bind(this);
  }

  mudaQuantia(item, { target }) {
    const { contador, carrinho } = this.state;
    const index = carrinho.findIndex((x) => x.id === item);
    const a = target.name === '-' ? contador[index] -= 1 : contador[index] += 1;
    console.log(a);
    this.setState({
      contador,
    });
    // console.log(contador);
    // console.log(target);
    // console.log(carrinho);
  }

  render() {
    const { carrinho } = this.state;
    const { contador } = this.state;
    if (carrinho.length === 0) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      <div>
        <span>
          Items no Carrinho:
          {carrinho.length}
        </span>
        <ul>
          {carrinho.map((item, i) => (
            <section key={ item.id }>
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
        </ul>

      </div>
    );
  }
}

Shoplist.propTypes = {
  carrinho: PropTypes.arrayOf(PropTypes.object).isRequired,
  contador: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Shoplist;
