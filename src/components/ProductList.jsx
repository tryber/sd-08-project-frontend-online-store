import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as RequestAPI from '../services/api';
import ProductCard from './ProductCard';
import TopBar from './TopBar';
import CategoriesList from './CategoriesList';
import BtnAddCart from './BtnAddCart';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      listCategories: [],
      products: [],
      query: '',
    };

    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.requestApi = this.requestApi.bind(this);
  }

  componentDidMount() {
    const { category, query } = this.state;
    this.fetchProducts(category, query);
    this.requestApi();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { category, query } = this.state;
    this.fetchProducts(category, query);
  }

  async fetchProducts(category, query) {
    try {
      const { results } = await RequestAPI
        .getProductsFromCategoryAndQuery(category, query);
      this.setState({ products: results });
    } catch (error) {
      console.log(error);
    }
  }

  requestApi() {
    this.setState(async () => {
      const categoryArray = await RequestAPI.getCategories();
      this.setState({ listCategories: categoryArray });
    });
  }

  render() {
    const { products, listCategories, query } = this.state;
    const { addCart } = this.props;
    return (
      <div className="header">
        <TopBar
          handleClick={ this.handleClick }
          handleChange={ this.handleChange }
          value={ query }
        />
        <CategoriesList categories={ listCategories } onClick={ this.handleChange } />
        {products.map((product) => {
          product.amount = 1;
          return (
            <div key={ product.id }>
              <Link
                to={ {
                  pathname: `/product/${product.id}`,
                  state: { productObj: product } } }
                data-testid="product-detail-link"
              >
                <ProductCard
                  product={ product }
                />
              </Link>
              <BtnAddCart
                dataTestId="product-add-to-cart"
                addCart={ addCart }
                product={ product }
              />
            </div>
          );
        })}
      </div>
    );
  }
}

ProductList.propTypes = {
  addCart: PropTypes.func.isRequired,
};
export default ProductList;
