import React from 'react';
import PropTypes from 'prop-types';

class ListCategories extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { name, value } = event.target;
    const { onClick } = this.props;
    onClick(name, value);
  }

  render() {
    const { categoriesList } = this.props;
    return (
      <div>
        {categoriesList.map((cat) => (
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
  categoriesList: PropTypes.arrayOf({
    name: PropTypes.string,
  }).isRequired,
};

export default ListCategories;
