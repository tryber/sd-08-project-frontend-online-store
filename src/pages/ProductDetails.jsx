import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import * as api from '../services/api';
import ShopCartButton from '../components/ShopCartButton';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      productInfo: {},
      isLoading: true,
    };
    this.addProductCart = this.addProductCart.bind(this);
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

  addProductCart() {
    const { productInfo: product } = this.state;
    let itensFromLocalStorage = [];
    if (localStorage.length !== 0) {
      itensFromLocalStorage = JSON.parse(localStorage.products);
      const productInCart = itensFromLocalStorage.filter(
        (item) => item.id === product[0].id,
      );
      if (productInCart.length === 0) {
        localStorage.setItem('products',
          JSON.stringify([...itensFromLocalStorage, product[0]]));
      }
    } else {
      localStorage.setItem('products',
        JSON.stringify([...itensFromLocalStorage, product[0]]));
    }
  }

  renderProductDetails(product) {
    const { title, thumbnail, price, attributes } = product[0];
    return (
      <div className="product-card" data-testid="product">
        <ShopCartButton />
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
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addProductCart }
        >
          Adicionar ao Carrinho
        </button>
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
