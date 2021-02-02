import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import EvaluationForm from '../components/EvaluationForm';
import EvaluationList from '../components/EvaluationList';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.sendToCart = this.sendToCart.bind(this);
    this.updateEvaluationList = this.updateEvaluationList.bind(this);
  }

  sendToCart() {
    const { location: { state: { title, imagePath, price } } } = this.props;
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

  updateEvaluationList() {
    this.setState({});
  }

  render() {
    const { location: { state: { title, imagePath, price, id } } } = this.props;
    const evaluations = JSON.parse(localStorage.getItem(`${id}_evaluations`)) || [];
    return (
      <div>
        <p data-testid="product-detail-name">{title}</p>
        <p>{price}</p>
        <img src={ imagePath } alt="product" />
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.sendToCart }
        >
          Adicionar ao carrinho
        </button>
        <Link data-testid="shopping-cart-button" to="/shoppingcart">Carrinho</Link>
        <EvaluationForm id={ id } triggerUpdate={ this.updateEvaluationList } />
        <EvaluationList evaluations={ evaluations } />
      </div>
    );
  }
}

export default ProductDetails;

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      imagePath: PropTypes.string,
      price: PropTypes.number,
      id: PropTypes.string,
    }),
  }).isRequired,
};
