import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Cart.css';
import { TiArrowBack } from 'react-icons/ti';

class Cart extends Component {
  constructor() {
    super();
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
          return undefined;
        }
        return { id: repete[0], qtd: repete.length };
      });
      const produtosFiltados = produtos.filter((e) => e !== undefined);
      // console.log(produtosFiltados);
      this.salvaProdutosFiltrados(produtosFiltados);
    }
  }

  async salvaProdutosFiltrados(produtos) {
    await Promise.all(produtos.map(async (element) => {
      const resultadoId = await this.buscaProdutoId(element.id);
      // console.log(resultadoId);
      this.salvaProduto(resultadoId, element.qtd);
    }));
  }

  async buscaProdutoId(id) {
    const BASE = 'https://api.mercadolibre.com/items/';
    const buscaProdutos = await fetch(`${BASE}${id}`);
    const resultProd = await buscaProdutos.json();
    return resultProd;
  }

  async salvaProduto(produto, qtd) {
    const { produtos } = this.state;
    await this.setState({
      produtos: [...produtos, { produto, qtd }],
    });
  }

  priceBr(price) {
    price = price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    price = price.toLocaleString('pt-br', { minimumFractionDigits: 2 });
    return price;
  }

  removeProduto(index) {
    const { produtos } = this.state;
    // const removido = produtos.splice(index, 1);
    const produtosFiltrados = produtos.filter((item) => item !== produtos[index]);
    console.log(produtosFiltrados);
    this.setState({
      produtos: produtosFiltrados,
    });
    localStorage.removeItem('cart');
    localStorage.setItem('cart', produtosFiltrados.map((item) => item.produto.id));
  }

  imprimeNovoLocal(produtos) {
    const novoLocal = [];
    for (let i = 0; i < produtos.length; i += 1) {
      for (let i2 = 0; i2 < produtos[i].qtd; i2 += 1) {
        novoLocal.push(produtos[i].produto.id);
      }
    }
    return novoLocal;
  }

  async alteraQTD(produtos, item, index, op) {
    let produtoAlterado = 0;
    const resultProduto = await this.buscaProdutoId(item.produto.id);
    if (op === '+') {
      produtoAlterado = item.qtd + 1;
    } else {
      if (item.qtd <= 1) {
        // return this.removeProduto(index);
      }
      produtoAlterado = item.qtd - 1;
    }
    produtos[index] = { produto: resultProduto, qtd: produtoAlterado };
    this.setState({
      produtos,
    });
    const novoLocal = this.imprimeNovoLocal(produtos);
    localStorage.removeItem('cart');
    localStorage.setItem('cart', novoLocal);
  }

  renderizaBTN(produtos, item, index) {
    return (
      <span>
        Quantidade:
        <button
          type="button"
          onClick={ () => this.alteraQTD(produtos, item, index, '-') }
          className="cart-btn-sub"
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <span
          className="cart-qtd"
          data-testid="shopping-cart-product-quantity"
        >
          { produtos[index].qtd }
        </span>
        <button
          type="button"
          className="cart-btn-sum"
          onClick={ () => this.alteraQTD(produtos, item, index, '+') }
          data-testid="product-increase-quantity"
        >
          +
        </button>
      </span>);
  }

  renderizaProdutos(produtos) {
    // const { produtos } = this.state;
    return (
      produtos.map((item, index) => (
        <li
          className="cart-list"
          key={ item.produto.id }
        >
          {/* <img src={ item.produto.thumbnail } alt={ item.produto.title } /> */}
          <p data-testid="shopping-cart-product-name">
            {item.produto.title}
          </p>
          { this.renderizaBTN(produtos, item, index) }
          <p>
            Preço Unitário:
            { this.priceBr(item.produto.price) }
          </p>
          <p>
            Total:
            <span
              className="cart-qtd"
            >
              { this.priceBr(item.produto.price * item.qtd) }
            </span>
          </p>
          <button
            type="button"
            onClick={ () => this.removeProduto(index) }
            className="cart-btn-remove"
          >
            X
          </button>
        </li>
      ))
    );
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
          ? this.renderizaProdutos(produtos)
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
