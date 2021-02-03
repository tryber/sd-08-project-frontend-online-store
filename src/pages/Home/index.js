import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SearchBar, SearchResults, Categories } from '../../components';

import styles from './styles.module.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      queryInput: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { results, handleSearch, handleSearchCategory,
      handleAddToCart, getCartItemsQuantity } = this.props;
    const { queryInput } = this.state;
    return (
      <div>
        <main className={ styles.mainContent }>
          <div className={ styles.leftSide }>
            <Categories handleSearchCategory={ handleSearchCategory } />
          </div>
          <div className={ styles.rightSide }>
            <SearchBar
              handleChange={ this.handleChange }
              handleSearch={ () => { handleSearch(queryInput); } }
              getCartItemsQuantity={ getCartItemsQuantity }
            />
            <SearchResults
              results={ results }
              handleAddToCart={ handleAddToCart }
            />
          </div>
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleSearchCategory: PropTypes.func.isRequired,
  getCartItemsQuantity: PropTypes.func.isRequired,
};

export default Home;
