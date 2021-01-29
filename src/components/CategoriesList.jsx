import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class CategoriesList extends Component {
  constructor() {
    super();
    this.state = {
      query: [],
      value: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { query, value } = this.state;
    const { list } = this.props;
    return (
      <section>
        <ol>
          Categorias:
          { list.map(({ id, name }) => (
            <Link
              to="/productList"
              onClick={ this.handleClick }
              data-testid="category"
              key={ id }
              value={ id }
            >
              { name }
            </Link>))}
        </ol>
        { query.map((item) => <ProductCard key={ item.id } product={ item } />) }
      </section>
    );
  }
}

CategoriesList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoriesList;
