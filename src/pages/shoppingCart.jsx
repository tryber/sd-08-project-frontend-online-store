import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/shoppingCartStyle.css';
import * as api from '../services/api';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      item: [{ id: '', title: '', thumbnail: '', price: 0 }],
    };

    this.getCards = this.getCards.bind(this);
    this.itemCartCard = this.itemCartCard.bind(this);
  }

  componentDidMount() {
    this.getCards();
  }

  async getCards() {
    const products = await api.readCart();
    console.log(products)
    this.setState({
      item: [products],
    });
    console.log(this.state);
  }

  itemCartCard() {
    const { item: { id, title, thumbnail, price } } = this.state;
    return (
      <div className="card" key={ id } data-testid="cart-products">
        <Link to={ `/${id}` } data-testid="product-detail-link">
          <img src={ thumbnail } alt={ title } />
          <h2>
            R$
            { price }
          </h2>
          <p data-testid="shopping-cart-product-name">{ title }</p>
        </Link>

      </div>
    );
  }

  render() {
    // const { item } = this.state;
    return (
      <div>
        <Header />
        <div className="shopping-cart-content">
          {this.itemCartCard()}
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
