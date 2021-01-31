import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as RequestAPI from '../services/api';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import ListCategories from './ListCategories';

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
    this.callApi = this.callApi.bind(this);
  }

  componentDidMount() {
    const { category, query } = this.state;
    this.fetchProducts(category, query);
    this.callApi();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { category, query } = this.state;
    this.fetchProducts(category, query);
  }

  async fetchProducts(categorie, query) {
    try {
      const { results } = await RequestAPI
        .getProductsFromCategoryAndQuery(categorie, query);
      this.setState({ products: results });
    } catch (error) {
      console.log(error);
    }
  }

  callApi() {
    this.setState(async () => {
      const categoryArray = await RequestAPI.getCategories();
      this.setState({ listCategories: categoryArray });
    });
  }

  render() {
    const { products, listCategories, query } = this.state;
    return (
      <div className="header">
        <SearchBar handleClick={ this.handleClick } handleChange={ this.handleChange } />
        {products.map((product) => (
          <Link
            to={ {
              pathname: `/product/${product.id}`,
              state: { productObj: product } } }
            data-testid="product-detail-link"
            key={ product.id }
          >
            <ProductCard
              product={ product }
            />
          </Link>))}
      </div>
    );
  }
}

export default ProductList;
