import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class CategoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories()
      .then((data) => this.setState({
        categories: data,
      }));
  }

  render() {
    const { onClick } = this.props;
    const { categories } = this.state;
    return (
      <div>
        Categorias:
        { categories.map(({ id, name }) => (
          <button
            className="col-12 btn btn-warning"
            type="button"
            data-testid="category"
            key={ id }
            value={ name }
            onClick={ onClick }
          >
            { name }
          </button>))}
      </div>
    );
  }
}

CategoriesList.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CategoriesList;
