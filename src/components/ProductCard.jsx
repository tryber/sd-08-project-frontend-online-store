import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductCard.css';

class ProductCard extends React.Component {
  render() {
    const { productInfo, categoryID, callback } = this.props;
    const { title, thumbnail, price, id, shipping } = productInfo;
    const { free_shipping: freeShipping } = shipping;
    const path = `/product/${categoryID}&${id}`;
    return (
      <div className="product-card" data-testid="product">
        <h3 data-testid="shopping-cart-product-name">
          { title }
        </h3>
        <img src={ thumbnail } alt="product model" />
        <h4>{ price !== null ? `R$: ${price.toFixed(2)}` : 'Consulte-nos'}</h4>
        <span className="free-shipping">
          {freeShipping ? <p data-testid="free-shipping"> FRETE GRÁTIS! </p> : ''}
        </span>
        <div className="linkButtonContainer">
          <Link to={ path } data-testid="product-detail-link">
            Ver Detalhes
          </Link>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ () => callback(productInfo) }
          >
            Adicionar ao Carrinho
          </button>
          <span className="msg" role="img" aria-label="thumbsUp">👍</span>
        </div>
      </div>
    );
  }
  //
}

export default ProductCard;

ProductCard.propTypes = {
  productInfo: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string.isRequired,
    shipping: PropTypes.shape({ free_shipping: PropTypes.bool }),
  }).isRequired,
  categoryID: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
