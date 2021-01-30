import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import AttributesList from '../components/AtttibutesList';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      productDetail: {},
      loading: true,
    };

    this.getProductDetails = this.getProductDetails.bind(this);
  }

  componentDidMount() {
    this.getProductDetails();
  }

  async getProductDetails() {
    const { match: { params: { id } } } = this.props;
    const { location: { state: { queryAPI, categoryAPI } } } = this.props;
    this.setState({
      loading: true,
    }, async () => {
      const getProductsAPI = await getProductsFromCategoryAndQuery(categoryAPI, queryAPI);
      const product = getProductsAPI.results.find((item) => item.id === id);
      this.setState({
        loading: false,
        productDetail: product,
      });
    });
  }

  render() {
    const { productDetail, loading } = this.state;
    const { title, price, thumbnail, attributes } = productDetail;
    if (loading) return <span>Carregando</span>;
    return (
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={ thumbnail } alt={ title } />
        <AttributesList attributes={ attributes } />
        <span>{`R$${price}`}</span>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      queryAPI: PropTypes.string.isRequired,
      categoryAPI: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
