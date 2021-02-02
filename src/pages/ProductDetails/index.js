import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductCard from '../../components/ProductCard';
import AddItemButton from '../../components/AddItemButton';
import CartButton from '../../components/CartButton';
import ProductEvaluationForm from '../../components/ProductEvaluationForm';
import ProductEvaluations from '../../components/ProductEvaluations';

import styles from './styles.module.css';

class ProductDetails extends Component {
  render() {
    const { location: { product, handleAddToCart },
      handleChangeEvaluation, getEvaluations } = this.props;
    const { id } = product;
    return (
      <div>
        <CartButton />
        <ProductCard
          handleAddToCart={ handleAddToCart }
          product={ product }
          showDetails={ false }
        >
          <AddItemButton
            data-testid="product-detail-add-to-cart"
            handleAddToCart={ handleAddToCart }
            product={ product }
          />
        </ProductCard>
        <div className={ styles.evaluations }>
          <ProductEvaluationForm
            product={ product }
            handleChangeEvaluation={ handleChangeEvaluation }
          />
          <ProductEvaluations evaluations={ getEvaluations(id) } />
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    product: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
      id: PropTypes.string,
    }),
    handleAddToCart: PropTypes.func,
  }).isRequired,
  handleChangeEvaluation: PropTypes.func.isRequired,
  getEvaluations: PropTypes.func.isRequired,
};

export default ProductDetails;
