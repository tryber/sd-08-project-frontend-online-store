import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SearchByTerms extends React.Component {
  render() {
    const { results } = this.props;
    return (
      <div>
        { results.map((product) => {
          const { title, thumbnail, price, id } = product;
          return (
            <div key={ id } data-testid="product">
              <p>{ title }</p>
              <img src={ thumbnail } alt="" />
              <p>{ price }</p>
              <Link
                to={ { pathname: `/details/${id}`, product } }
                data-testid="product-detail-link"
              >
                Ver detalhes
              </Link>
              <button type="button">Adicionar ao carrinho</button>
            </div>
          );
        }) }
      </div>
    );
  }
}

SearchByTerms.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  map: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default SearchByTerms;
