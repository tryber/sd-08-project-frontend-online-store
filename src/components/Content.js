import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Listagem from '../pages/listagem';
import Carrinho from '../pages/carrinho';

class Content extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={ (routerProps) => (<Listagem
            { ...routerProps }
            { ...this.props }
          />) }
        />
        <Route exact path="/carrinho" component={ Carrinho } />
      </Switch>
    );
  }
}

export default Content;
