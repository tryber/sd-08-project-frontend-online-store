import React from 'react';
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
        product: product,
      });
    });
  }
  render() {
    return (
      <div data-testid="product-detail-name">Funcionou</div>
    );
  }
}

export default ProductDetails;
