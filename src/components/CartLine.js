import React from 'react';
import PropTypes from 'prop-types';

export default function CartLine(props) {
  const { item, removeProdutc, addProdutc } = props;
  return (

    <section>

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
            onClick={ () => removeProdutc(item) }
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
            onClick={ () => addProdutc(item) }
            data-testid="product-increase-quantity"
          >
            +
          </button>
        </div>
        <div className="cel">{parseFloat(item.price).toFixed(2)}</div>
      </div>
    </section>
  );
}

CartLine.propTypes = {
  item: PropTypes.objectOf({
    id: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
  addProdutc: PropTypes.func.isRequired,
  removeProdutc: PropTypes.func.isRequired,
};
