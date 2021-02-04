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
      quant: 1,
    };

    this.getProductDetails = this.getProductDetails.bind(this);
    this.sendToCart = this.sendToCart.bind(this);
    this.handleStorage = this.handleStorage.bind(this);
  }

  componentDidMount() {
    this.getProductDetails();
    this.handleStorage();
  }

  handleStorage() {
    const productsCart = JSON.parse(localStorage.getItem('productsCart'));
    const { productsInCart } = this.state;

    if (productsCart === null) {
      this.setState({
        productsInCart,
      });
    } else {
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
    const { productDetail, quant } = this.state;
    const { title, price } = productDetail;
    const { match: { params: { id } } } = this.props;
    this.setState(({ productsInCart }) => ({
      productsInCart: [...productsInCart, { title, price, id, quant }],
    }), () => {
      const { productsInCart } = this.state;
      localStorage.setItem('productsCart', JSON.stringify(productsInCart));
    });
  }

  render() {
    const { productDetail, loading } = this.state;
    const { title, price, thumbnail, attributes } = productDetail;
    const number = ['1', '2', '3', '4', '5'];
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
        <div>
          <form>
            <label htmlFor="email">
              <input
                type="text"
                id="email"
                placeholder="email"
              />
            </label>
            <label htmlFor="product-detail-evaluation">
              <textarea
                data-testid="product-detail-evaluation"
                placeholder="comentário (opcional)"
              />
            </label>
            <select>
              { number
                .map((numbers) => <option key={ numbers } name="rate">{numbers}</option>)}
            </select>
          </form>
          <button type="button">Enviar</button>
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
