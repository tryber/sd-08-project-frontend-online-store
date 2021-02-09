import React from 'react';
import PropTypes from 'prop-types';
import { FaCartPlus } from 'react-icons/fa';

class AddCart extends React.Component {
  render() {
    const { onAddCart, dataTestId } = this.props;
    return (
      <button
        onClick={ onAddCart }
        data-testid={ dataTestId }
        type="button"
        className="button-add-cart"
      >
        <FaCartPlus />
      </button>
    );
  }
}

AddCart.propTypes = {
  onAddCart: PropTypes.func.isRequired,
};

export default AddCart;
