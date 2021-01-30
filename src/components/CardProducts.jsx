import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CardProducts.css';

class CardProducts extends React.Component {
  render() {
    const { product, addCart, dontShowAddButton } = this.props;
    const { thumbnail, price, title, id } = product;

    return (
      <div className="productCard" data-testid="product">
        <div className="imgDiv">
          <img src={ thumbnail } alt="Thumb" />
        </div>
        <div className="textDiv">
          <p>
            R$
            { price }
          </p>
          <h4>{ title }</h4>
          <Link
            to={ {
              pathname: `/${id}`,
              state: { product } } }
            data-testid="product-detail-link"
          >
            More Info
          </Link>
          { !dontShowAddButton
            && (
              <button
                onClick={ () => addCart(product) }
                type="button"
                data-testid="product-add-to-cart"
              >
                Adicionar ao carrinho
              </button>)}
        </div>
      </div>
    );
  }
}

CardProducts.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  addCart: PropTypes.func.isRequired,
  dontShowAddButton: PropTypes.bool,
};

CardProducts.defaultProps = {
  dontShowAddButton: false,
};

export default CardProducts;
