import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as cartApi from '../services/localStorage';

const URL_GET_PRODUCT_BY_ID = 'https://api.mercadolibre.com/items';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.getProductById(id);
  }

  async getProductById(id) {
    const endPoint = `${URL_GET_PRODUCT_BY_ID}/${id}`;
    const response = await fetch(endPoint);
    const fetchedProduct = await response.json();
    this.setState({ product: fetchedProduct });
  }

  render() {
    const { product } = this.state;
    const { title, price, thumbnail } = product;
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to="/ShoppingCart"
        >
          <img
            className="cart-icon"
            src="https://image.flaticon.com/icons/png/512/2404/2404120.png"
            alt="Imagem do carrinho"
          />
        </Link>
        <div className="product-details" data-testid="product-detail-name">
          <h1>{ title }</h1>
          <h2>
            { `Preço unitário: R$ ${price}` }
          </h2>
          <img src={ thumbnail } alt={ title } />
          <div>
            <h3>Especificações</h3>
            <ul>
              <li>Especificação 1</li>
              <li>Especificação 2</li>
              <li>Especificação 3</li>
            </ul>
          </div>
          <button
            type="button"
            className="add-to-cart-button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => cartApi.addToCart(product) }
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
