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
    const { product: { title, thumbnail, price } } = this.state;
    return (
      <div>
        <h3 data-testid="product-detail-name">{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <p>
          Preço: R$
          {price}
        </p>
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
