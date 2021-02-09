import React from 'react';
import PropTypes from 'prop-types';

import Categories from '../Components/Categories';
import Header from '../Components/Header';

class Home extends React.Component {
  render() {
    const { onAddCart } = this.props;
    return (
      <div>
        <Header />
        <Categories onAddCart={ onAddCart } />
      </div>
    );
  }
}

Home.propTypes = {
  onAddCart: PropTypes.func.isRequired,
};

export default Home;
