import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductCard from '../../components/ProductCard';
import AddItemButton from '../../components/AddItemButton';
import CartButton from '../../components/CartButton';
import ProductEvaluationForm from '../../components/ProductEvaluationForm';
import ProductEvaluations from '../../components/ProductEvaluations';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';

import styles from './styles.module.css';

class ProductDetails extends Component {
  render() {
    const { location: { product, handleAddToCart },
      handleChangeEvaluation, getEvaluations, getCartItemsQuantity } = this.props;
    const { id } = product;
    return (
      <div>
        <Header>
          <div>
            <BackButton />
            <CartButton getCartItemsQuantity={ getCartItemsQuantity } />
          </div>
        </Header>
        <div className={ styles.container }>
          <div className={ styles.productDetails }>
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
            <div className={ styles.attributes }>
              <pre>
                { JSON.stringify(product, null, 2) }
              </pre>
            </div>
          </div>
          <div className={ styles.evaluations }>
            <ProductEvaluationForm
              product={ product }
              handleChangeEvaluation={ handleChangeEvaluation }
            />
            <ProductEvaluations evaluations={ getEvaluations(id) } />
          </div>
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
  getCartItemsQuantity: PropTypes.func.isRequired,
};

export default ProductDetails;
