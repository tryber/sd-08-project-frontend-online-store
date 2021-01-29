import React from 'react';
import PropTypes from 'prop-types';

export default class Categories extends React.Component {
  render() {
    const { loading, categoriesList } = this.props;
    return (
      <aside className="categories-list">
        {loading
          ? <p>Loading...</p>
          : (
            <ul>
              {categoriesList
                .map((item) => (
                  <li
                    key={ item.id }
                    data-testid="category"
                  >
                    {item.name}
                  </li>
                ))}
            </ul>
          )}
      </aside>
    );
  }
}

Categories.propTypes = {
  loading: PropTypes.bool.isRequired,
  categoriesList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
