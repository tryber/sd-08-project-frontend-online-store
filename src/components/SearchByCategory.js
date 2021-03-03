import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default class SearchByCategory extends Component {
  render() {
    const { produtos, addAoCarrinho } = this.props;
    return (
      <div>
        { produtos.length > 0 && <ProductCard
          addAoCarrinho={ addAoCarrinho }
          produtos={ produtos }
        />}
      </div>
    );
  }
}

SearchByCategory.propTypes = {
  produtos: PropTypes.arrayOf(PropTypes.object).isRequired,
  addAoCarrinho: PropTypes.func.isRequired,
};
