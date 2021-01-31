import React from 'react';
// import PropTypes from 'prop-types';
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
    return (
      <div className="buttons">
        { categories.map((category) => (
          <button
            value={ category.id }
            name="categoryID"
            key={ category.id }
            type="button"
            data-testid="category"
          >
            {category.name}
          </button>
        ))}
      </div>
    );
  }
}

// ButtonCategory.propTypes = {
//   onClickRequest: PropTypes.func.isRequired,
// };

export default ButtonCategory;
