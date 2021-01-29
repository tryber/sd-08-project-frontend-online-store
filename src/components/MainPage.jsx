import React from 'react';
import PropTypes from 'prop-types';
import ListagemDeProdutos from './ListagemDeProdutos';
import Search from './Search';

class MainPage extends React.Component {
  render() {
    const { categories, products, onclick, addCart } = this.props;
    return (
      <div>
        <Search />
        <div className="categoriesList" data-testid="category">
          { categories.map(({ name, id }) => (
            <button
              data-testid="query-button"
              type="button"
              key={ name }
              className="categoriesItem"
              onClick={ () => onclick(id) }
            >
              {name}
            </button>
          ))}
        </div>
        <ListagemDeProdutos products={ products } addCart={ addCart } />
      </div>
    );
  }
}

MainPage.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.any).isRequired,
  products: PropTypes.arrayOf(PropTypes.any).isRequired,
  onclick: PropTypes.func.isRequired,
};

export default MainPage;
