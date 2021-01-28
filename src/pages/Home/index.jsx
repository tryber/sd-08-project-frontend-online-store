import React from 'react';
import Button from '../../components/Button';
import SearchBar from '../../components/SearchBar';
import * as api from '../../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = { categories: [] };
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({ categories });
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <SearchBar />
        <Button />
        { categories.map((category) => (
          <div
            data-testid="category"
            key={ category.id }
          >
            {category.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
