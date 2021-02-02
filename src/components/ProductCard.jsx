import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { onClick } = this.props;
    onClick(event.target.parentElement.id);
  }

  render() {
    const { product, cart, products } = this.props;
    const { id, title, thumbnail, price } = product;

    return (
      <li className="product-card" data-testid="product" id={ id }>
        <Link
          to={ {
            pathname: `/products/${id}`,
            state: { cart, products } } }
          data-testid="product-detail-link"
        >
          <div>
            <h4>{title}</h4>
            <img alt="Product" src={ thumbnail } />
            <p>{`R$ ${price.toFixed(2)}`}</p>
          </div>
        </Link>
        <button
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
          type="button"
        >
          Adicionar ao Carrinho
        </button>
      </li>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object),
  products: PropTypes.objectOf(PropTypes.any).isRequired,
};

ProductCard.defaultProps = {
  cart: [],
};

export default ProductCard;
