import React from 'react';
import { Link } from 'react-router-dom';

class ShowCategory extends React.Component {
  render() {
    const { categories, handleProducts } = this.props;
    return (
      <div className="show-category">
        <ul>
          {categories.map((category) => (
            <li key={ category.id }>
              <Link
                to="/details"
                data-testid="category"
                onClick={ () => handleProducts(category.id) }
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ShowCategory;
