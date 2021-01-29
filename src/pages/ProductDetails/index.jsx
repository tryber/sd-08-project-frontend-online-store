import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import * as api from '../../services/api';
import Loading from '../../components/Loading';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      loading: false,
    };
    this.responseFromAPI = this.responseFromAPI.bind(this);
  }

  componentDidMount() {
    this.responseFromAPI();
  }

  async responseFromAPI() {
    const { match: { params: { id } } } = this.props;
    const response = await api.getProductFromId(id);
    this.setState({
      product: response,
      loading: false,
    });
    console.log(this.product);
  }

  render() {
    const { product, loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <div>
        <div>
          <h4>Detalhamento do produto</h4>
          <h5 data-testid="product-detail-name">{ product.title }</h5>
          <img
            src={ product.thumbnail }
            alt={ `imagem de ${product.title}` }
          />
          <p>
            R$
            {' '}
            { product.price }
          </p>
        </div>
        <Button />
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
