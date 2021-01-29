import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      productInfo: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getProductsFromAPI();
  }

  getProductsFromAPI() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const ids = id.split('&');
    const category = ids[0];
    const productID = ids[1];

    this.setState({ isLoading: true }, async () => {
      const products = await api.getProductsFromCategoryAndQuery(
        category,
        undefined,
      );
      const productFilter = products.results.filter(
        (product) => product.id === productID,
      );
      this.setState({
        productInfo: productFilter,
        isLoading: false,
      });
    });
  }

  renderProductDetails(product) {
    const { title, thumbnail, price, attributes } = product[0];
    return (
      <div className="product-card" data-testid="product">
        <h3 data-testid="product-detail-name">{ title }</h3>
        <img src={ thumbnail } alt="product model" />
        <h4>{ price }</h4>
        <ul>
          {attributes.map((attribute) => (
            <li key={ attribute.name }>
              {attribute.name}
              :
              { attribute.value_name}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const { productInfo, isLoading } = this.state;
    return (
      <div>
        {isLoading ? <Loading /> : this.renderProductDetails(productInfo)}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
