import React from 'react';
import PropTypes from 'prop-types';

import ShoppingCartLink from './ShoppingCartLink';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      cart: [],
      product: [],
      loading: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getProduct();
    this.getCartList();
  }

  handleClick() {
    const { product } = this.state;
    this.setState((previousState) => ({
      cart: [...previousState.cart, product],
    }));
  }

  getProduct() {
    const { location: { state: { products } } } = this.props;
    const { match: { params: { id } } } = this.props;
    this.setState(
      { loading: true },
      () => {
        this.setState({
          product: products.results.find((result) => result.id === id),
          loading: false,
        });
      },
    );
  }

  getCartList() {
    const { location: { state: { cart } } } = this.props;
    this.setState({
      cart,
    });
  }

  renderProduct(product) {
    return (
      <section id={ product.id } className="product-detail">

        <h4 data-testid="product-detail-name">{ product.title }</h4>

        <img alt="Product" src={ product.thumbnail } />

        <p>{`R$ ${(product.price).toFixed(2)}`}</p>

        <button
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleClick }
          type="button"
        >
          Adicionar ao Carrinho
        </button>

        <div className="technical-info-container">
          <h6>Especificação Técnica</h6>
          {product.attributes
            .map((attribute) => (
              <p key={ attribute.name }>
                {
                  `${attribute.name}: ${attribute.value_name}`
                }
              </p>))}
        </div>
      </section>
    );
  }

  render() {
    const { cart, product, loading } = this.state;

    return (
      <div>
        <ShoppingCartLink cart={ cart } />
        { loading ? 'Carregando...' : this.renderProduct(product) }
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
  location: PropTypes.shape({
    state: PropTypes.shape({
      products: PropTypes.objectOf(PropTypes.any).isRequired,
    }),
  }).isRequired,
};

export default ProductDetails;
