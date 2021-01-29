import React from 'react';
import PropTypes from 'prop-types';

class SearchByTerms extends React.Component {
  render() {
    const { results } = this.props;
    return (
      <div>
        { results.map(({ title, thumbnail, price }, index) => (
          <div key={ index } data-testid="product">
            <p>{ title }</p>
            <img src={ thumbnail } alt="" />
            <p>{ price }</p>
          </div>
        )) }
      </div>
    );
  }
}

SearchByTerms.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  map: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default SearchByTerms;
