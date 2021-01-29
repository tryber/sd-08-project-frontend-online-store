import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories()
      .then((data) => {
        this.setState({
          categories: data,
        });
      });
  }

  render() {
    const { categories } = this.state;
    const { handleCategory } = this.props;
    return (
      <>
        {categories.map((item) => (
          <button
            type="button"
            onClick={ handleCategory }
            data-testid="category"
            id={ item.id }
            key={ item.id }
          >
            {item.name}
          </button>
        ))}
        <button
          type="button"
          onClick={ handleCategory }
          data-testid="category"
          id=""
        >
          Limpar
        </button>
      </>
    );
  }
}

Categories.propTypes = {
  handleCategory: PropTypes.func.isRequired,
};

export default Categories;
