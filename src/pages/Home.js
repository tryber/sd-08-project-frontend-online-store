import React, { Component } from 'react';

import Header from '../components/Header';
import CategoriesList from '../components/CategoriesList';

export default class Home extends Component {
  render() {
    return (
      <div className="busca">
        <Header />
        <CategoriesList />
      </div>
    );
  }
}
