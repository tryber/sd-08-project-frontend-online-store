import React from 'react';
import PropTypes from 'prop-types';

export default function CategoriesList(props) {
  const { handleClick } = props;

  const handleCategoryClick = (e) => {
    if (handleClick) {
      handleClick(e.target.value);
    }
  };

  return (
    <nav className="categories-list">
      <ul>
        <li>
          <button onClick={ handleCategoryClick } value="Computador" className="nav-link">
            Computador
          </button>
        </li>
        <li>
          <button className="nav-link">Veiculos</button>
        </li>
        <li>
          <button className="nav-link">Computador</button>
        </li>
        <li>
          <button className="nav-link">Veiculos</button>
        </li>
        <li>
          <button className="nav-link">Sex Shop</button>
        </li>
        <li>
          <button className="nav-link">Eletrodomesticos</button>
        </li>
        <li>
          <button className="nav-link">Produtos do Lar</button>
        </li>
        <li>
          <button className="nav-link">Computador</button>
        </li>
        <li>
          <button className="nav-link">Veiculos</button>
        </li>
        <li>
          <button className="nav-link">Computador</button>
        </li>
        <li>
          <button className="nav-link">Veiculos</button>
        </li>
        <li>
          <button className="nav-link">Sex Shop</button>
        </li>
        <li>
          <button className="nav-link">Eletrodomesticos</button>
        </li>
        <li>
          <button className="nav-link">Produtos do Lar</button>
        </li>
        <li>
          <button className="nav-link">Computador</button>
        </li>
        <li>
          <button className="nav-link">Veiculos</button>
        </li>
        <li>
          <button className="nav-link">Computador</button>
        </li>
        <li>
          <button className="nav-link">Veiculos</button>
        </li>
        <li>
          <button className="nav-link">Sex Shop</button>
        </li>
        <li>
          <button className="nav-link">Eletrodomesticos</button>
        </li>
        <li>
          <button className="nav-link">Produtos do Lar</button>
        </li>
        <li>
          <button className="nav-link">Computador</button>
        </li>
        <li>
          <button className="nav-link">Veiculos</button>
        </li>
        <li>
          <button className="nav-link">Computador</button>
        </li>
        <li>
          <button className="nav-link">Veiculos</button>
        </li>
        <li>
          <button className="nav-link">Sex Shop</button>
        </li>
        <li>
          <button className="nav-link">Eletrodomesticos</button>
        </li>
        <li>
          <button className="nav-link">Produtos do Lar</button>
        </li>
      </ul>
    </nav>
  );
}

CategoriesList.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
