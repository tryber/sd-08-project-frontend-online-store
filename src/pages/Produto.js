import React from 'react';
import PropTypes from 'prop-types';

class Produto extends React.Component {
  render() {
    const { listOfProducts, addToCart } = this.props;
    const { match: { params: { id } } } = this.props;
    const product = listOfProducts && listOfProducts.filter((prod) => prod.id === id)[0];
    return (
      <div className="right-content">
        <span data-testid="product-detail-name">
          { product && product.title }
        </span>

        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => addToCart(product.title) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

Produto.propTypes = {
  listOfProducts: PropTypes.arrayOf(PropTypes.shape({})),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),

};

Produto.defaultProps = {
  listOfProducts: [{}],
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: '',
    }),
  }),
};

Produto.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Produto;
