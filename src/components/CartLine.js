import React from 'react';
import PropTypes from 'prop-types';

export default class CartLine extends React.Component {
  delete() {
    const { item, deleteItem } = this.props;
    deleteItem(item);
  }

  render() {
    const { item, removeProduct, addProduct } = this.props;
    return (
      <section>
        <div key={ item.id } className="cel-container-row">
          <div className="cel">
            <button type="button" onClick={ this.delete }>x</button>
          </div>
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
          <div className="cel">{parseFloat(item.productPrice).toFixed(2)}</div>
        </div>
      </section>
    );
  }
}

CartLine.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    quantity: PropTypes.number,
    productPrice: PropTypes.number,
  }).isRequired,
  addProduct: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
};
