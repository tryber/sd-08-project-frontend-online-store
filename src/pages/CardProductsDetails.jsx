import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as cartApi from '../services/localStorage';
import Header from '../components/Header';

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
        <Header />
        <main className="product-details-main-content">
          <div className="product-details" data-testid="product-detail-name">
            <div className="img-container">
              <img className="product-details-img" src={ thumbnail } alt={ title } />
            </div>
            <div className="details-container">
              <h3>{ title }</h3>
              <h3>Especificações</h3>
              <h3>
                { `Preço unitário: R$ ${price}` }
              </h3>
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
        </main>
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
