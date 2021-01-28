import React from 'react';
import * as api from '../services/api';
import Loading from './Loading';

class MapCategories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.mapCategories();
  }

  mapCategories() {
    this.setState({ loading: true },
      async () => {
        const response = await api.getCategories();
        this.setState({
          categories: response,
          loading: false,
        });
      });
  };

  categoriesCard () {
    const { categories } = this.state;
    return (
    <div>
        { categories.map((result) =>
        <button key={ result.id } data-testid="category">
          { result.name }
        </button>)}
    </div>
    )
  }

  render() {
    const { loading } = this.state;
    return (
    <div>
      { loading ? <Loading /> : this.categoriesCard() }
    </div>
    );
  }
}

export default MapCategories;
