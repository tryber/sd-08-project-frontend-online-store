import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { item, handleAddItemToCart, search } = this.props;
    const { id, title, price, thumbnail } = item;

    return (
      <section data-testid="product">
        <p>{ title }</p>

        <img src={ thumbnail } alt="Thumbnail" />

        <p>{`R$${price}`}</p>

        <Link to={ `/details/${search}&${id}` } data-testid="product-detail-link">
          Ver mais detalhes
        </Link>

        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => handleAddItemToCart(item) }
        >
          Adicionar ao carrinho
        </button>
      </section>
    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
  handleAddItemToCart: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default ProductCard;
