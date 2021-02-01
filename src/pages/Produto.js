import React from 'react';
import PropTypes from 'prop-types';
import Avaliacoes from '../components/Avaliacoes';

class Produto extends React.Component {
  render() {
    const { listOfProducts } = this.props;
    const { match: { params: { id } } } = this.props;
    const product = listOfProducts && listOfProducts.filter((prod) => prod.id === id)[0];
    return (
      <div className="right-content">
        <span data-testid="product-detail-name">
          { product && product.title }
        </span>
        <Avaliacoes { ...this.props } />
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

export default Produto;
