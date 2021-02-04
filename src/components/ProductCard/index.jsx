import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  buttonAddProduct(productInfo, addProductToCart) {
    return (
      <button
        type="button"
        data-testid="product-add-to-cart"
        onClick={ () => { addProductToCart(productInfo); } }
      >
        Adicionar Produto
      </button>
    );
  }

  render() {
    const { productInfo, addProductToCart } = this.props;
    return (
      <div className="prodContainer" data-testid="product">
        <img src={ productInfo.thumbnail } alt="product img" />
        <h3>{productInfo.title}</h3>
        <h4>
          R$
          {' '}
          {productInfo.price}
        </h4>
        {productInfo.shipping.free_shipping && (
          <p
            data-testid="free-shipping"
          >
            Frete Grátis
          </p>)}
        <Link
          to={ `/product-details/${productInfo.id}` }
          data-testid="product-detail-link"
        >
          Detalhes
        </Link>
        {this.buttonAddProduct(productInfo, addProductToCart)}
      </div>
    );
  }
}

ProductCard.propTypes = {
  productInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  addProductToCart: PropTypes.func.isRequired,
};

export default ProductCard;
