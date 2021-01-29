import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    const { match: { params: { title } } } = this.props;
    api.getProductsFromCategoryAndQuery('', title).then((product) => {
      this.setState({
        product: product.results[0],
      }, () => console.log(product.results[0]));
    });
  }

  render() {
    const { product } = this.state;
    return (
      <div data-testid="product-detail-name">
        <h3>Teste</h3>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: String,
    }),
  }).isRequired,
};

export default ProductDetails;
