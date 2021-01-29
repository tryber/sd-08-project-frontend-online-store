import React from 'react';

import PropTypes from 'prop-types';
import * as api from '../services/api';

class Category extends React.Component {
  constructor() {
    super();
    this.attstate = this.attstate.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      category: [],
      missstate: false,
      target: '',
    };
  }

  async componentDidMount() {
    const categories = await api.getCategories();
    this.attstate(categories);
  }

  handleClick(event) {
    const { onSubmit } = this.props;
    const { category, target } = this.state;
    const categoryButton = event;
    const objArray = category
      .filter((obj) => obj.name === categoryButton.target.innerText);
    this.setState({ target: objArray[0].id });
    onSubmit(target);
  }

  attstate(categories) {
    this.setState({ category: categories, missstate: true });
  }

  render() {
    const { category, missstate } = this.state;
    if (missstate === false) {
      return <p>\o/</p>;
    }
    return (
      <ul>
        {category.map((obj) => (
          <button
            type="button"
            key={ obj.id }
            data-testid="category"
            onClick={ this.handleClick }
          >
            {obj.name}
          </button>
        ))}
      </ul>
    );
  }
}

Category.propType = {
  handleCategoryClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Category;
