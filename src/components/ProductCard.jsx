import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  constructor() {
    super();
    this.sendToCart = this.sendToCart.bind(this);
  }

  sendToCart() {
    const { title, imagePath, price } = this.props;
    const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts'));
    if (selectedProducts.length === 0) {
      selectedProducts.push({ title, imagePath, price, quantity: 1 });
      localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
    } else {
      const productFound = selectedProducts
        .findIndex((product) => product.title === title);
      if (productFound >= 0) {
        selectedProducts[productFound].quantity += 1;
        localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
      } else {
        selectedProducts.push({ title, price, imagePath, quantity: 1 });
        localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
      }
    }
  }

  render() {
    const { title, imagePath, price } = this.props;
    return (
      <div data-testid="product">
        <p>{title}</p>
        <p>{price}</p>
        <img src={ imagePath } alt="product" />
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.sendToCart }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
