import React from 'react';

// import * as api from './services/api';

function App() {
  // api.getProductsFromCategoryAndQuery("MLB271599", "Ração").then(cat => console.log(cat));
  return (
    <div>
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    </div>
  );
}

export default App;
