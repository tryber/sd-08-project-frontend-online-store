import React from 'react';
import PropTypes from 'prop-types';

class ButtonAddCart extends React.Component {
  constructor() {
    super();
    this.buttonAddProduct = this.buttonAddProduct.bind(this);
  }

  buttonAddProduct(productInfo, addProductToCart) {
    return (
      <button
        type="button"
        data-testid="product-detail-add-to-cart"
        onClick={ () => { addProductToCart(productInfo); } }
      >
        Adicionar Produto
      </button>
    );
  }

  render() {
    const { productInfo, addProductToCart } = this.props;
    return (
      <div>
        {this.buttonAddProduct(productInfo, addProductToCart)}
      </div>
    );
  }
}

ButtonAddCart.propTypes = {
  productInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addProductToCart: PropTypes.func.isRequired,
};

export default ButtonAddCart;
