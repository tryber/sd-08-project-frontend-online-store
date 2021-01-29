import React from 'react';
import { Route } from 'react-router-dom';

import Category from './Category';

class Home extends React.Component {
  render() {

   // this.componentDidMount() {
      //
  //  }

    return (
      <>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria
        </p>
        <Category />
      </>
    );
  }
}

export default Home;
