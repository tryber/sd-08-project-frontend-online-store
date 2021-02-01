import React from 'react';
import PropTypes from 'prop-types';

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
        <h4>{productInfo.price}</h4>
        {this.buttonAddProduct(productInfo, addProductToCart)}
      </div>
    );
  }
}

ProductCard.propTypes = {
  productInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addProductToCart: PropTypes.func.isRequired,
};

export default ProductCard;
