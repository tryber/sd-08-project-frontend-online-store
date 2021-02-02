import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ProductForms from '../components/ProductForms';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.fetchProduct = this.fetchProduct.bind(this);
    this.productDetail = this.productDetail.bind(this);
    this.addCartItem = this.addCartItem.bind(this);
    this.state = {
      loading: true,
      product: [],
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  async fetchProduct() {
    const { match: { params: { id } } } = this.props;
    const ids = id.split('-');
    const fetch = await api.getProductsFromCategoryAndQuery(ids[0], '');
    const result = fetch.results.filter((product) => product.id === ids[1]);
    this.setState({
      loading: false,
      product: result,
    });
  }

  async addCartItem() {
    const { product } = this.state;
    product[0].qtd = 1;
    let itemsCart = await JSON.parse(localStorage.getItem('itemsCart'));

    if (itemsCart && itemsCart.length !== 0) {
      console.log(itemsCart);
      itemsCart.forEach((item) => {
        if (item.id === product[0].id) {
          item.qtd += 1;
        } else {
          itemsCart = [
            ...itemsCart,
            product,
          ];
        }
      });

      localStorage.setItem('itemsCart', JSON.stringify(itemsCart));
    } else {
      itemsCart = product;
      localStorage.setItem('itemsCart', JSON.stringify(itemsCart));
    }
  }

  productDetail() {
    const { product } = this.state;
    return (
      <div>
        {product.map((item) => (
          <div key={ item.id } data-testid="product">
            <p data-testid="product-detail-name">{ item.title }</p>
            <img src={ item.thumbnail } alt={ item.title } />
            <span>{ `${item.price} ${item.currency_id} ` }</span>
            <p>especificação técnica</p>
            <ul>
              {item.attributes
                .map((attribute) => (
                  <li key={ attribute.value_id }>
                    {`${attribute.name}: ${attribute.value_name}`}
                  </li>))}
            </ul>
            <button
              type="button"
              value={ item }
              onClick={ this.addCartItem }
              data-testid="product-detail-add-to-cart"
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        {loading
          ? <h1>Loading...</h1>
          : this.productDetail()}
        <ProductForms />
        <Link to="/carrinho-compras"><img src="https://st2.depositphotos.com/3665639/7442/v/600/depositphotos_74424541-stock-illustration-pictograph-of-shopping-cart.jpg" alt="carrinho de compras" data-testid="shopping-cart-button" /></Link>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetail;
