import React from 'react';
import Card from './Card';

class Main extends React.Component {
  render() {
    const { itemsProducts } = this.props;
    return (
      <div>
        {itemsProducts.map((product) => (
          <Card dat key={ product.id } product={ product } />))}
      </div>
    );
  }
}

export default Main;
