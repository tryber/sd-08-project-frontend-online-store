import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Cart.css';
import { TiArrowBack } from 'react-icons/ti';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: [],
    };
  }

  componentDidMount() {
    if (localStorage.getItem('cart')) {
      const carts = localStorage.getItem('cart').split(',');

      const produtos = carts.map((item, i) => {
        const repete = carts.filter((item2) => carts.indexOf(item2) === i);
        if (!repete[0]) {
          return;
        }
        return { id: repete[0], qtd: repete.length };
      });
      const produtosFiltados = produtos.filter((e) => e !== undefined);
      produtosFiltados.map(async (produto) => {
        const BASE = 'https://api.mercadolibre.com/items/';
        const buscaProdutos = await fetch(`${BASE}${produto.id}`);
        const resultProd = await buscaProdutos.json();
        this.salvaProduto(resultProd, produto.qtd);
      });
    }
  }

  salvaProduto(produto, qtd) {
    const { produtos } = this.state;
    this.setState({
      produtos: [...produtos, { produto, qtd }],
    });
  }

  render() {
    const { history } = this.props;
    const { produtos } = this.state;
    return (
      <div className="cart-container">
        <button type="button" className="cart-goback" onClick={ history.goBack }>
          <TiArrowBack className="cart-goback-icon" />
          Voltar
        </button>
        {produtos.length >= 1
          ? produtos.map((item) => (
            <li
              className="cart-list"
              data-testid="shopping-cart-product-name"
              key={ item.produto.id }
            >
              <img src={ item.produto.thumbnail } alt={ item.produto.title } />
              <p>
                {item.produto.title}
              </p>
              <span data-testid="shopping-cart-product-quantity">
                Quantidade:
                <span className="cart-qtd">{item.qtd}</span>
              </span>
              <p>
                Preço Unitário:
                { item.produto.price}
              </p>
              <p>
                Total:
                <span className="cart-qtd">{ item.produto.price * item.qtd}</span>
              </p>
            </li>
          ))
          : <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>}
      </div>
    );
  }
}

Cart.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

export default Cart;
