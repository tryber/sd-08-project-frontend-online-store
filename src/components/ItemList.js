import React from 'react';
import ItemCard from './ItemCard';

class ItemList extends React.Component {
  render() {
    const { products } = this.props;
    const { title, thumbnail, price, id } = products;

    return (
      <div>
        { products.map((elem) => <ItemCard key={ elem.id } title={ elem.title } img={ elem.thumbnail } price={ elem.price } />) }

      </div>
    );
  }
}

export default ItemList;
