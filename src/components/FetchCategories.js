import React from 'react';
import * as api from '../services/api';

class FetchCategories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      categories: [],
    };

    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await api.getCategories();
    this.setState({
      categories,
      loading: false,
    });
  }

  categoryCard() {
    const { categories } = this.state;
    return (
      <div>
        { categories
          .map((category) => (
            <h6
              key={ category.id }
              data-testid="category"
            >
              { category.name }
            </h6>)) }
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        {loading ? <h6>Loading</h6>
          : this.categoryCard() }
      </div>
    );
  }
}

export default FetchCategories;
