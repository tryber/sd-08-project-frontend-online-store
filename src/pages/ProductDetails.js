import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import AttributesList from '../components/AtttibutesList';
import ShoppingCartButton from '../components/ShoppingCartButton';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      productDetail: {},
      loading: true,
      productsInCart: [],
    };

    this.getProductDetails = this.getProductDetails.bind(this);
    this.sendToCart = this.sendToCart.bind(this);
  }

  componentDidMount() {
    this.getProductDetails();
    const productsCart = JSON.parse(localStorage.getItem('productsCart'));

    if (productsCart !== null) {
      this.setState({
        productsInCart: productsCart,
      });
    }
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

  sendToCart() {
    const { productDetail, productsInCart } = this.state;
    const { title, price } = productDetail;
    const { match: { params: { id } } } = this.props;
    this.setState(() => ({
      productsInCart: [...productsInCart, { title, price, id }],
    }), () => {
      localStorage.setItem('productsCart', JSON.stringify(productsInCart));
    });
  }

  render() {
    const { productDetail, loading } = this.state;
    const { title, price, thumbnail, attributes } = productDetail;
    if (loading) return <span>Carregando</span>;
    return (
      <div>
        <ShoppingCartButton />
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={ thumbnail } alt={ title } />
        <AttributesList attributes={ attributes } />
        <span>{`R$${price}`}</span>
        <div>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ this.sendToCart }
          >
            Adicionar ao carrinho
          </button>
        </div>
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
