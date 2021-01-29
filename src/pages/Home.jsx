import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';

export default function Home() {
  return (
    <main className="App">
      <header>
        <section className="header-search">
          <input type="text" />
        </section>

        <nav className="header-nav">
          <ul>
            <li>Computador</li>
            <li>Veiculos</li>
            <li>Sex Shop</li>
            <li>Eletrodomesticos</li>
            <li>Produtos do Lar</li>
          </ul>
        </nav>

        <section className="header-checkout">
          <input type="text" />
        </section>
      </header>

      <section className="content">
        <section className="productlist">
          <section className="product-card">
            <h3 className="product-card-title">Tenis Muito Feliz e Legal</h3>
            <img
              className="product-card-image"
              src="product.png"
              alt="Tenis Muito Feliz e Legal"
            />
            <span className="product-card-price">R$ 100,00</span>
            <button className="product-card-buy" type="button">
              Adicionar ao Carrinho
            </button>
          </section>
        </section>
      </section>
    </main>
  );
}
