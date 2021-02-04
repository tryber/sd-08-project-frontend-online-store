import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as RequestAPI from '../services/api';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import ListCategories from './ListCategories';
import ButtonAddToCart from './ButtonAddToCart';

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

  async fetchProducts(category, query) {
    try {
      const { results } = await RequestAPI
        .getProductsFromCategoryAndQuery(category, query);
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
    const { addCart } = this.props;
    return (
      <div className="header">
        <SearchBar
          handleClick={ this.handleClick }
          handleChange={ this.handleChange }
          value={ query }
        />
        <ListCategories categories={ listCategories } onClick={ this.handleChange } />
        {products.map((product) => (// product.amount = 1;
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
            <ButtonAddToCart
              dataTestId="product-add-to-cart"
              addCart={ addCart }
              product={ product }
            />
            {/* <button
                type="button"
                onClick={ () => addCart(product) }
                data-testid="product-add-to-cart"
              >
                <Link />
                Adicionar ao carrinho
              </button> */}
          </div>
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  addCart: PropTypes.func.isRequired,
};
export default ProductList;
