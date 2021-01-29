import React from 'react';
import PropTypes from 'prop-types';

class SearchButton extends React.Component {
  render() {
    const { callback } = this.props;
    return (
      <button
        type="button"
        data-testid="query-button"
        onClick={ callback }
      >
        Pesquisar
      </button>
    );
  }
}
SearchButton.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default SearchButton;
