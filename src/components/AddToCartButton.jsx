import React from 'react';
import PropTypes from 'prop-types';

class AddToCartButton extends React.Component {
  render() {
    const { handleAddItemToCart, id,
      // title, thumbnail, price, attributes, condition, address, shipping,
    } = this.props;
    // console.log(productsList);
    return (
      <button
        data-testid="product-add-to-cart"
        type="submit"
        value={ id }
        onClick={ handleAddItemToCart }
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

AddToCartButton.propTypes = {
  handleAddItemToCart: PropTypes.func,
  id: PropTypes.string,
}.isRequired;

export default AddToCartButton;
