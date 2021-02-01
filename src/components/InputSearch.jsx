import React from 'react';
import ProductCar from './ProductCar';
import propTypes from 'prop-types';


class InputSearch extends React.Component {
  render() {
    const { query, onChange, onClick, cartSize } = this.props;
    return (
      <header>
        <input
          name="query"
          type="text"
          data-testid="query-input"
          id="search-input"
          value={ query }
          onChange={ onChange }
        />

        <button
          type="button"
          onClick={ onClick }
          data-testid="query-button"
        >
          Pesquisar
        </button>
        <ProductCar />
      </header>
    );
  }
}

export default InputSearch;

InputSearch.propTypes = {
  query: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  onClick: propTypes.func.isRequired,
  cartSize: propTypes.number.isRequired,
};
