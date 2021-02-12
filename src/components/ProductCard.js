import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { item, handleAddItemToCart, list } = this.props;
    const { id, title, price, thumbnail } = item;

    return (
      <section data-testid="product">
        <p>{ title }</p>

        <img src={ thumbnail } alt="Thumbnail" />

        { item.shipping.free_shipping && <p data-testid="free-shipping">FRETE GRÁTIS</p> }
        <p>{`R$${price}`}</p>

        <Link
          to={ {
            pathname: `/details/${id}`,
            state: { list } } }
          data-testid="product-detail-link"
        >
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
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  list: PropTypes.shape(PropTypes.object()).isRequired,
  handleAddItemToCart: PropTypes.func.isRequired,
};

export default ProductCard;
