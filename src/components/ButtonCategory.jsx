import React from 'react';
import * as api from '../services/api';

class ButtonCategory extends React.Component {
  constructor() {
    super();
    this.state = {
      categorys: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((resolve) => this.setState({ categorys: resolve }));
  }

  render() {
    const { categorys } = this.state;
    return (
      <div>
        { categorys.map((category) => (
          <button
            key={ category.id }
            type="button"
            data-testid="category"
          >
            {category.name}
          </button>
        ))}
      </div>
    );
  }
}

export default ButtonCategory;
