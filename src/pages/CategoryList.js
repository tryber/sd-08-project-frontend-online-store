import React from 'react';
import { getCategories } from '../services/api';

class CategoryList extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((result) => {
      this.setState({
        categories: result,
      });
    });
  }

  render() {
    const { categories } = this.state;
    console.log(categories);
    return (
      <aside>
        <ul>
          { categories.map((category) => <li key={ category.id }>{ category.name }</li>) }
        </ul>
      </aside>
    );
  }
}

export default CategoryList;
