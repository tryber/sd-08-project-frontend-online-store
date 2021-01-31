import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoriesList extends Component {
  render() {
    const { list, onClick } = this.props;
    return (
      <div>
        Categorias:
        { list.map(({ id, name }) => (
          <button
            name="category"
            type="button"
            data-testid="category"
            key={ id }
            value={ id }
            onClick={ onClick }
          >
            { name }
          </button>))}
      </div>
    );
  }
}

CategoriesList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CategoriesList;
