import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class DetailsPage extends React.Component {
  render() {
    const { location: { product }, addCart } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div>
        <Link to="/">Home</Link>
        <p>{id}</p>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={ `${thumbnail}` } alt="" />
        <p>{price}</p>
        <input type="number" data-testid="shopping-cart-product-quantity" />
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => { addCart({ id, title }); } }
        >
          Adicionar ao Carrinho
        </button>
        <Link
          data-testid="shopping-cart-button"
          to={ { pathname: '/cart', product } }
        >
          Carrinho
        </Link>
      </div>
    );
  }
}

DetailsPage.propTypes = {
  addCart: PropTypes.func.isRequired,
  location: PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default DetailsPage;
