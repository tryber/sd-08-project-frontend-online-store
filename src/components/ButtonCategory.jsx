import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ButtonCategory extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((resolve) => this.setState({ categories: resolve }));
  }

  render() {
    const { categories } = this.state;
    const { handleChange } = this.props;
    return (
      <div className="buttons">
        { categories.map((category) => (
          <button
            value={ category.id }
            name="categoryID"
            key={ category.id }
            type="button"
            data-testid="category"
            onClick={ handleChange }
          >
            {category.name}
          </button>
        ))}
      </div>
    );
  }
}

ButtonCategory.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default ButtonCategory;
