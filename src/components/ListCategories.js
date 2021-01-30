import React from 'react';
import * as api from '../services/api';
/* import PropTypes from 'prop-types';
 */
class ListCategories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => (
      this.setState({
        categories,
      })
    ));
  }

  render() {
    const { categories } = this.state;
    return (
      <ul>
        {categories.map((cat) => (
          <li
            data-testid="category"
            key={ cat.name }
            value={ cat.name }
            name={ cat.id }
          >
            {cat.name}
          </li>
        ))}
      </ul>
    );
  }
}

/* ListCategories.propTypes = {
  categoriesList: PropTypes.arrayOf({
    name: PropTypes.string,
  }).isRequired,
}; */

export default ListCategories;
