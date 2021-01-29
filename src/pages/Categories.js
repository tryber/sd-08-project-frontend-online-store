import React from 'react';
import PropTypes from 'prop-types';

export default class Categories extends React.Component {
  render() {
    const { categoriesList } = this.props;
    return (
      <aside className="categories-list">
        {categoriesList
          .map((item) => <div key={ item.id } data-testid="category">{item.name}</div>)}
      </aside>
    );
  }
}

Categories.propTypes = { categoriesList: PropTypes.arrayOf(PropTypes.object).isRequired };
