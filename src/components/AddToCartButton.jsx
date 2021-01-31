import React from 'react';
import PropTypes from 'prop-types';

class AddToCartButton extends React.Component {
  render() {
    const { handleAddItemToCart, id,
      // title, thumbnail, price, attributes, condition, address, shipping,
    } = this.props;
    // console.log(productsList);
    return (
      // <label htmlFor="add-to-cart-button">
      <button
        data-testid="product-add-to-cart"
        type="submit"
        value={ id }
        onClick={ handleAddItemToCart }
        // info={ { ...this.props,
        //   id,
        //   title,
        //   thumbnail,
        //   price,
        //   attributes,
        //   // available_quantity,
        //   // sold_quantity,
        //   // stop_time,
        //   // accepts_mercadopago,
        //   // currency_id,
        //   condition,
        //   address,
        //   shipping,
        // } }
      >
        Adicionar ao Carrinho
      </button>
      // </label>
      // <button
      //   data-testid="product-add-to-cart"
      //   name="add-to-cart"
      //   id="add-to-cart"
      //   onClick={ handleAddItemToCart }
      //   type="submit"
      //   value={ id }
      // >
      //   Adicionar ao Carrinho
      // </button>
    );
  }
}

AddToCartButton.propTypes = {
  handleAddItemToCart: PropTypes.func,
  id: PropTypes.string,
}.isRequired;

export default AddToCartButton;
