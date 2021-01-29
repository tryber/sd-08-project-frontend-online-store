import React from 'react';

import * as api from '../services/api';

class Category extends React.Component {
  constructor() {
    super();
    this.attstate = this.attstate.bind(this);
    this.state = {
      category: [],
      missstate: false,
    };
  }

  async componentDidMount() {
    const categories = await api.getCategories();
    this.attstate(categories);
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
          <li
            key={ obj.id }
            data-testid="category"
          >
            {obj.name}
          </li>
        ))}
      </ul>

    );
  }
}

export default Category;
