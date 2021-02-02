import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItensOnCart extends Component {
  constructor() {
    super();
    let itensOnCart = 0;
    if ({}.hasOwnProperty.call(sessionStorage, 'itensOnCart')) {
      itensOnCart = JSON.parse(sessionStorage.getItem('itensOnCart'));
    }
    this.state = { itensOnCart };
  }

  render() {
    const { dataTestId } = this.props;
    const { itensOnCart } = this.state;
    return (
      <div>
        <span data-testid={ dataTestId } className="itens-cart">
          {itensOnCart}
        </span>
        {/* {itensOnCart > 0 && (
          <span data-testid={ dataTestId } className="itens-cart">
            {itensOnCart}
          </span>
        )} */}
      </div>
    );
  }
}

ItensOnCart.propTypes = {
  itensOnCart: PropTypes.number.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default ItensOnCart;
