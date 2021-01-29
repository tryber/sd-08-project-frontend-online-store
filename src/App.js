import React from 'react';
import Categories from './Components/Categories';

// import * as api from './services/api';

function App() {
  // api.getProductsFromCategoryAndQuery("MLB271599", "Ração").then(cat => console.log(cat));
  return (
    <div>
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
      <Categories />
    </div>
  );
}

export default App;
