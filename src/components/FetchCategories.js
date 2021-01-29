import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class FetchCategories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      categories: [],
    };

    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await api.getCategories();
    this.setState({
      categories,
      loading: false,
    });
  }

  increaseItem(item) {
    const { productsTeste } = this.state;
    const items = JSON.parse(localStorage.getItem('itemsCart') || '[]');
    const itemsIndex = items.findIndex((element) => element.id === item.id);
    const flag = -1;
    if (itemsIndex !== flag) {
      items[itemsIndex].qtd += 1;
    }
    localStorage.setItem('itemsCart', JSON.stringify(items));
    productsTeste.find((element) => element.id === item.id).qtd += 1;
    this.setState({ productsTeste });
  }

  decreaseItem(item) {
    const { productsTeste } = this.state;
    const items = JSON.parse(localStorage.getItem('itemsCart') || '[]');
    const itemsIndex = items.findIndex((element) => element.id === item.id);
    const flag = -1;
    const flagZero = 0;
    if (items[itemsIndex].qtd > flagZero) {
      if (itemsIndex !== flag) {
        items[itemsIndex].qtd -= 1;
      }
      localStorage.setItem('itemsCart', JSON.stringify(items));
      productsTeste.find((element) => element.id === item.id).qtd -= 1;
      this.setState({ productsTeste });
    }
  }

  categoryCard() {
    const { categories } = this.state;
    const { callback } = this.props;

    return (

      <div>
        { categories
          .map((category) => (
            <button
              value={ category.id }
              type="button"
              key={ category.id }
              data-testid="category"
              onClick={ callback }
            >
              { category.name }
            </button>)) }
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        {loading ? <h6>Loading...</h6>
          : this.categoryCard() }
      </div>
    );
  }
}

FetchCategories.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default FetchCategories;
