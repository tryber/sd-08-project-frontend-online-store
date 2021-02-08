import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { item, handleAddItemToCart } = this.props;
    const { title, price, thumbnail } = item;

    return (
      <section data-testid="product">
        <p>{ title }</p>

        <img src={ thumbnail } alt="Thumbnail" />

        <p>{`R$${price}`}</p>

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
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
  handleAddItemToCart: PropTypes.func.isRequired,
};

export default ProductCard;
