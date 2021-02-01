import React from 'react';

import Button from '../../components/Button';
import SearchBar from '../../components/SearchBar';
import ProductCard from '../../components/ProductCard';
import Loading from '../../components/Loading';

import * as api from '../../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
      searchInput: '',
      searchCategory: 'MLB1953',
      loading: true,
      shoppingCart: [],
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.findProducts = this.findProducts.bind(this);
    this.filterByCategory = this.filterByCategory.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({ categories, loading: false });
    });
    this.findProducts();
  }

  onSearchChange(event) {
    this.setState({
      searchInput: event.target.value,
    });
  }

  addProductToCart(productInfo) {
    const { shoppingCart } = this.state;
    this.setState({
      shoppingCart: [...shoppingCart, productInfo],
    });
  }

  findProducts() {
    const { searchInput: searchQuery, searchCategory } = this.state;
    this.setState(
      { loading: true },
      async () => {
        const apiResponse = await api
          .getProductsFromCategoryAndQuery(searchCategory, searchQuery);

        this.setState({
          products: apiResponse ? apiResponse.results : [],
          loading: false,
        });
      },
    );
  }

  filterByCategory(categoryID) {
    this.setState({ searchCategory: categoryID }, this.findProducts);
  }

  render() {
    const { categories, loading, products, searchInput, shoppingCart } = this.state;

    return (
      <div>
        <SearchBar
          onChange={ this.onSearchChange }
          value={ searchInput }
          handleSearch={ this.findProducts }
        />
        <Button shoppingCart={ shoppingCart } />
        <main>
          <div className="categoryContainer">
            { categories.map((category) => (
              <button
                data-testid="category"
                key={ category.id }
                type="button"
                onClick={ () => { this.filterByCategory(category.id); } }
              >
                {category.name}
              </button>
            ))}
          </div>
          {loading && <Loading />}
          <div>
            { products.length
              ? products.map((product) => (
                <ProductCard
                  key={ product.id }
                  productInfo={ product }
                  addProductToCart={ this.addProductToCart }
                />
              ))
              : <h3>Nenhum produto foi encontrado</h3>}
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
