import React from 'react';
import * as api from './api';
import { getProductsFromCategoryAndQuery } from './api';
import ListCards from '../components/ListCards';

export async function listUpdate(newValue) {
  const objectquery = await getProductsFromCategoryAndQuery(newValue);
  await this.setState({ object: objectquery.results });
}

export function CardMount() {
  const { object } = this.state;
  if (object[0] === 1) {
    return (
      <h2 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h2>
    );
  }
  if (object.length === 0) {
    return <h2> Nenhum produto foi encontrado </h2>;
  }
  return object.map((item) => (<ListCards
    key={ item.id }
    productprop={ item }
  />));
}

export async function findCategories() {
  const categoriesFromApi = await api.getCategories();
  this.setState({
    categories: categoriesFromApi,
  });
}

export async function searchCategories(categorie) {
  const listCatego = await api.getProductsFromCategoryAndQuery('', categorie);
  await this.setState({ object: listCatego.results });
}
