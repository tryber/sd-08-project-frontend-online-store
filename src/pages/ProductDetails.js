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
      productsInCart: [],
    };

    this.getProductDetails = this.getProductDetails.bind(this);
    this.sendToCart = this.sendToCart.bind(this);
    this.handleClickButton = this.handleClickButton.bind(this);
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

  handleClickButton() {
    const productsCart = JSON.parse(localStorage.getItem('productsCart'));
      this.setState({
        productsInCart: productsCart,
      }, () => { this.sendToCart(); })
  }

  sendToCart() {
    const { productDetail } = this.state;
    const { match: { params: { id } } } = this.props;
    const { title, price } = productDetail;
    const { productsInCart } = this.state;
    if (productsInCart === null) {
      this.setState(() => ({
        productsInCart: [{ title, price, id }],
      }), () => {
        const { productsInCart } = this.state;
        localStorage.setItem('productsCart', JSON.stringify(productsInCart));
      });
    } else {
      this.setState(() => ({
        productsInCart: [ ...productsInCart, { title, price, id }],
      }), () => {
        const { productsInCart } = this.state;
        localStorage.setItem('productsCart', JSON.stringify(productsInCart));
      });
    }

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
        <div data-testid="product-detail-add-to-cart">
          <button
            type="button"
            data-testid="shopping-cart-button"
            onClick={ this.handleClickButton }
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
