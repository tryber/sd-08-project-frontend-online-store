import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Header from '../components/Header';

const DEF_CART_KEY = 'CART_ITENS';

export default function Cart() {
  const [productList, setProductList] = useState(null);

  // api.getCategories();
  // api.getProductsFromCategoryAndQuery();

  useEffect(() => {
    if (productList === null) {
      const cart = JSON.parse(localStorage.getItem(DEF_CART_KEY)) || [];
      if (cart.length !== 0) {
        setProductList(cart);
      }
    }
  }, [productList]);

  const handleClearCart = () => {
    localStorage.setItem(DEF_CART_KEY, []);
    setProductList([]);
  };

  return (
    <main>
      <Header showLogo={ false } showBack />
      {productList === null ? (
        <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
      ) : null}
      <div className="shopping-cart-list">
        {productList !== null
          ? productList.map((i, index) => (
            <div className="shopping-cart-list-item" key={ index }>
              <div className="item-name" data-testid="shopping-cart-product-name">
                {i.title}
              </div>
              <div className="item-count" data-testid="shopping-cart-product-quantity">
                {i.count}
              </div>
            </div>
          ))
          : null}
      </div>
      <button type="button" onClick={ handleClearCart }>
        Limpar
      </button>
    </main>
  );
}

// Cart.propTypes = {
//   product: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     category_id: PropTypes.string,
//     thumbnail: PropTypes.string.isRequired,
//     price: PropTypes.string.isRequired,
//     mercadopago: PropTypes.bool.isRequired,
//     images: PropTypes.arrayOf(PropTypes.string).isRequired,
//     attributes: PropTypes.arrayOf(
//       PropTypes.shape({
//         type: PropTypes.string,
//         value: PropTypes.string,
//       }),
//     ),
//   }).isRequired,
// };
