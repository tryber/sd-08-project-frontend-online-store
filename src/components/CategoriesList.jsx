import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoriesList extends Component {
  render() {
    const { list } = this.props;
    return (
      <ol>
        Categorias:
        { list.map(({ id, name }) => (
          <li data-testid="category" key={ id } value={ id }>
            { name }
          </li>))}
        ;
      </ol>
    );
  }
}

CategoriesList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoriesList;
