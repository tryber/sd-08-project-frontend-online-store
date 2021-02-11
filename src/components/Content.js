import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Listagem from '../pages/listagem';
import Carrinho from '../pages/carrinho';
import Produto from '../pages/Produto';
import Checkout from '../pages/checkout';

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
        <Route
          exat
          path="/carrinho"
          render={ (routerProps) => (<Carrinho
            { ...routerProps }
            { ...this.props }
          />) }
        />
        <Route
          exact
          path="/produto/:id"
          render={ (routerProps) => <Produto { ...routerProps } { ...this.props } /> }
        />
        <Route exact path="/checkout" component={ Checkout } />
      </Switch>
    );
  }
}

export default Content;
