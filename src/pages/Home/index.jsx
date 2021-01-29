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
      loading: true,
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({ categories, loading: false });
    });
  }

  onSearchChange(event) {
    this.setState({
      searchInput: event.target.value,
    });
  }

  onSearchSubmit() {
    const { searchInput: searchQuery } = this.state;
    this.setState(
      { loading: true },
      async () => {
        const apiResponse = await api.getProductsFromCategoryAndQuery('', searchQuery);

        this.setState({
          products: apiResponse ? apiResponse.results : [],
          loading: false,
        });
      },
    );
  }

  render() {
    const { categories, loading, products, searchInput } = this.state;

    return (
      <div>
        <SearchBar
          onChange={ this.onSearchChange }
          value={ searchInput }
          handleSearch={ this.onSearchSubmit }
        />
        <Button />
        <main>
          <div>
            { categories.map((category) => (
              <div
                data-testid="category"
                key={ category.id }
              >
                {category.name}
              </div>
            ))}
          </div>
          {loading && <Loading />}
          <div>
            { products.length
              ? products.map((product) => (
                <ProductCard key={ product.id } productInfo={ product } />
              ))
              : <h3>Nenhum produto foi encontrado</h3>}
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
