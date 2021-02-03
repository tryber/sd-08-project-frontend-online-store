import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddToCartFromDetail extends Component {
  constructor() {
    super();

    this.setLocalStorage = this.setLocalStorage.bind(this);
  }

  setLocalStorage() {
    const { prop } = this.props;
    if (localStorage.cart) {
      const test1 = JSON.parse(localStorage.getItem('cart'));
      test1.push(prop);
      const Productobject = JSON.stringify(test1);
      localStorage.setItem('cart', Productobject);
    } else {
      const test1 = [prop];
      const Productobject = JSON.stringify(test1);
      localStorage.setItem('cart', Productobject);
    }
  }

  render() {
    return (

      <div>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ this.setLocalStorage }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

AddToCartFromDetail.propTypes = {
  prop: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default AddToCartFromDetail;
