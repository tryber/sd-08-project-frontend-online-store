import React from 'react';
import * as api from '../services/api';

class Home extends React.Component {
  render() {
    return (
      <div>
        { api.getCategories() }
        { api.getProductsFromCategoryAndQuery('MLB5672', 'carro') }
      </div>
    );
  }
}

export default Home;
