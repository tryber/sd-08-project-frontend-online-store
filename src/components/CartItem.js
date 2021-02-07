import React from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends React.Component {
  constructor(props) {
    super(props);
    const { cartList } = this.props;
    this.state = {
      cartList,
    };
  }

  render() {
    const { removeProduct, addProduct } = this.props;
    const { cartList } = this.state;
    return (
      <div>
        {cartList.map((item) => (
          <div key={ item.id } className="cel-container-row">
            <div
              data-testid="shopping-cart-product-name"
              className="cel"
            >
              {item.title}
            </div>
            <div className="cel">
              <button
                type="button"
                name={ item.title }
                data-testid="product-decrease-quantity"
                onClick={ () => removeProduct(item) }
              >
                -
              </button>
              <div
                data-testid="shopping-cart-product-quantity"
                className="cel"
              >
                {item.quantity}
              </div>
              <button
                type="button"
                name={ item.title }
                onClick={ () => addProduct(item) }
                data-testid="product-increase-quantity"
              >
                +
              </button>
            </div>
            <div className="cel">{parseFloat(item.price).toFixed(2)}</div>
          </div>
        ))}
      </div>
    );
  }
}

CartItem.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.object).isRequired,
  addProduct: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
};
