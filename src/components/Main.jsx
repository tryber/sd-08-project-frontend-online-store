import React from 'react';
import PropTypes from 'prop-types';
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

Main.propTypes = {
  itemsProducts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Main;
