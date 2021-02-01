import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    const { match: { params: { title } } } = this.props;
    api.getProductsFromCategoryAndQuery('', title).then((product) => {
      this.setState({
        product: product.results[0],
      }, () => console.log(product.results[0]));
    });
  }

  render() {
    const { productToCart, productCart, productNumber } = this.props;
    const { product } = this.state;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <h3 data-testid="product-detail-name">{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <p>
          Preço: R$
          {price}
        </p>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => productToCart(product) }
        >
          Adicionar ao carrinho
        </button>
        <Link
          to={ { pathname: '/cart', state: { productCart, productNumber } } }
          data-testid="shopping-cart-button"
        >
          Ver carrinho

        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string,
    }),
  }).isRequired,
  productToCart: PropTypes.func.isRequired,
  productCart: PropTypes.arrayOf(String).isRequired,
  productNumber: PropTypes.number.isRequired,
};

export default ProductDetails;
