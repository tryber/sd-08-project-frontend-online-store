import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardProducts extends React.Component {
  render() {
    const { product, addCart } = this.props;
    const { thumbnail, price, title, id } = product;

    return (
      <div>
        <img src={ thumbnail } alt="Thumb" />
        <p>{ title }</p>
        <p>{ price }</p>
        <Link to={ { pathname: `/${id}`, state: { product } } } data-testid="product-detail-link">Details</Link>
        <button onClick={ () => addCart(product) } type="button">Adicionar ao carrinh</button>
      </div>
    );
  }
}

CardProducts.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardProducts;
