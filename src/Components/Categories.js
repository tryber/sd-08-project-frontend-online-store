import React from 'react';
import * as api from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({ categories });
      console.log(categories);
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <section>
        <ul>
          { categories.map((cat) => {
            const { id, name } = cat;
            return <li data-testid="category" key={ id }>{ name }</li>;
          }) }
        </ul>
      </section>
    );
  }
}

export default Categories;
