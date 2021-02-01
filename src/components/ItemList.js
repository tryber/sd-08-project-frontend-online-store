import React from 'react';
import PropTypes from 'prop-types';
import * as storageApi from '../services/apiLocalStorage';

import ItemCard from './ItemCard';

class ItemList extends React.Component {
  render() {
    const { products } = this.props;

    return (
      <div>
        { products.map((elem) => (
          <>
            <ItemCard
              key={ elem.id }
              title={ elem.title }
              img={ elem.thumbnail }
              price={ elem.price }
              id={ elem.id }
            />
            <button
              type="button"
              data-testid="product-add-to-cart"
              onClick={ () => {
                storageApi.addToCart(elem);
              } }
            >
              Adicionar ao carrinho
            </button>
          </>
        )) }

      </div>
    );
  }
}

ItemList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ItemList;
