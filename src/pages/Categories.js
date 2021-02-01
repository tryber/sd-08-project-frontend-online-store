import React from 'react';
import PropTypes from 'prop-types';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    const { categoriesList } = this.props;
    console.log(`lista: ${categoriesList}`);
    this.state = {
      allCategories: categoriesList,
    };
    this.productByCategory = this.productByCategory.bind(this);
  }

  productByCategory(event) {
    const idByChoice = event.target;
    console.log(idByChoice);
    // const { categoriesList } = this.setState;
    // const productsFiltred = categoriesList.filter((item) => item.id === idByChoice);
    // return productsFiltred;
  }

  render() {
    const { allCategories } = this.state;
    // console.log(allCategories);
    return (
      <aside className="categories-list">
        {allCategories.map((item) => (
          <button
            type="button"
            key={ item.id }
            id={ item.id }
            data-testid="category"
            onClick={ this.productByCategory }
          >
            {item.name}
          </button>
        ))}
      </aside>
    );
  }
}

Categories.propTypes = {
  categoriesList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
