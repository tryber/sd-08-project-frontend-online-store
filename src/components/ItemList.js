import React from 'react';
import PropTypes from 'prop-types';

import ItemCard from './ItemCard';

class ItemList extends React.Component {
  render() {
    const { products } = this.props;

    return (
      <div>
        { products.map((elem) => (<ItemCard
          key={ elem.id }
          title={ elem.title }
          img={ elem.thumbnail }
          price={ elem.price }
          id={ elem.id }
        />)) }

      </div>
    );
  }
}

ItemList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ItemList;
