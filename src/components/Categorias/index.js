import React, { Component } from 'react';
import { getCategories } from '../../services/api';
import './Categorias.css';

class Categorias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorias: [],
    };
  }

  componentDidMount() {
    this.buscarListaCategorias();
  }

  async buscarListaCategorias() {
    const categorias = await getCategories();
    this.setState({
      categorias,
    });
  }

  render() {
    const { categorias } = this.state;
    return (
      <div className="cat-container">
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <nav>
          {categorias.map((item) => (
            <div data-testid="category" key={ item.id } className="cat-item">
              {item.name}
            </div>
          ))}
        </nav>
      </div>
    );
  }
}

export default Categorias;
