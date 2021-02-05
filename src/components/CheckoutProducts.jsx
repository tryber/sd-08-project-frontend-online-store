import React from 'react';
import PropTypes from 'prop-types';

class CheckoutProducts extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        <div>
          <span>Revise seus Produtos</span>
        </div>
        <div style={ { display: 'flex' } }>
          { products.map((el) => (
            <div style={ { margin: '30px' } } key={ el.id }>
              <img style={ { width: '120px' } } src={ el.thumbnail } alt={ el.title } />
              <span>{el.title}</span>
              <span>{`R$${(el.price).toFixed(2)}`}</span>
              <span>{`Qtd: ${el.amount}`}</span>
              <span>{`Total: R$${(el.price * el.amount).toFixed(2)}`}</span>
            </div>
          ))}
        </div>
        <div>
          <span>
            {`TOTAL DA COMPRA: R$${(products.reduce((current, value) => {
              current += value.price * value.amount;
              return current;
            }, 0)).toFixed(2)}`}
          </span>
        </div>
      </div>
    );
  }
}

CheckoutProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default CheckoutProducts;
