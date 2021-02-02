import React from 'react';
// import '../css/DetailsProduct.css';
import { useLocation } from 'react-router-dom';
import { localStorageSave } from '../localStorage';
import { BtnShoppingCart } from '../components';

export default function DetailsProject() {
  const { state: { product } } = useLocation();
  const { title, price, thumbnail, attributes } = product;
  const data = Object.values({ ...attributes });
  return (
    <main>
      <section className="product-details">
        <div className="header-content" />
        <div className="product-img">
          <img src={ thumbnail.replace('I', 'O') } alt="foto" />
          <BtnShoppingCart />
        </div>
        <div className="detail-name">
          <h3 data-testid="product-detail-name">{title}</h3>
        </div>
        <div className="price-label">
          <span>{`R$ ${price.toFixed(2)}`}</span>
        </div>
        <div>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => localStorageSave('shoppingCart', product, product.id) }
          >
            Adicionar ao carrinho
          </button>
        </div>
        <div>
          <table>
            <tbody>
              {data.map((attribute, index) => (
                <tr key={ index }>
                  <td>{attribute.name}</td>
                  <td>{Object.values({ ...attribute.values }).map((e) => e.name)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
