import React from 'react';
import PropTypes from 'prop-types';
import ResultCard from './ResultCard';

class SearchResult extends React.Component {
  render() {
    const { queryResult, search, addProduct } = this.props;

    if (search === false) {
      return (
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>);
    }
    if (queryResult.length === 0) return <div>Nenhum produto foi encontrado</div>;
    return (
      <div>
        {
          queryResult.map((product) => (
            <ResultCard
              key={ product.id }
              product={ product }
              addProduct={ addProduct }
            />))
        }
      </div>
    );
  }
}

SearchResult.defaultProps = {
  queryResult: [],
};

SearchResult.propTypes = {
  queryResult: PropTypes.arrayOf(Array),
};

SearchResult.propTypes = {
  search: PropTypes.bool.isRequired,
};

SearchResult.propTypes = {
  addProduct: PropTypes.func.isRequired,
};

export default SearchResult;
