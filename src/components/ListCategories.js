import React from 'react';
import PropTypes from 'prop-types';
import * as mercadolibreAPI from '../services/api';

class ListCategories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleClick({ target }) {
    const { value, name } = target;
    const { onClick } = this.props;
    onClick({ id: value, query: name });
  }

  async fetchCategories() {
    const { getCategories } = mercadolibreAPI;
    const fetchCategories = await getCategories();
    this.setState((state) => ({
      ...state, categories: fetchCategories,
    }));
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map((cat) => (
          <input
            type="button"
            data-testid="category"
            key={ cat.name }
            onClick={ this.handleClick }
            value={ cat.name }
            name={ cat.id }
          />
        ))}
      </div>
    );
  }
}

ListCategories.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ListCategories;
