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
    const { onClickRequest } = this.props;
    return (
      <div>
        { categories.map((category) => (
          <button
            value={ category.id }
            name="category"
            key={ category.id }
            type="button"
            data-testid="category"
            onClick={ onClickRequest }
          >
            {category.name}
          </button>
        ))}
      </div>
    );
  }
}

ButtonCategory.propTypes = {
  onClickRequest: PropTypes.func.isRequired,
};

export default ButtonCategory;
