import React from 'react';
import { getCategories } from '../services/api';

class Catefories extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };

    this.categoriesAPI = this.categoriesAPI.bind(this);
  }

  componentDidMount() {
    this.categoriesAPI();
  }

  async categoriesAPI() {
    const result = await getCategories();
    this.setState({
      categories: result.map((categories) => categories.name),
    });
  }

  render() {
    const { categories } = this.state;
    if (categories !== 0) {
      return (
        <div>
          { categories.map(categories => <button type="button" key={ categories } data-testid="category">{categories}</button>) }
        </div>
      );
    }
  }
}

export default Catefories;
