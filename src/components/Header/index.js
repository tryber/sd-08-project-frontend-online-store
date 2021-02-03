import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

class Header extends Component {
  render() {
    const { children } = this.props;
    return (
      <header className={ styles.header }>
        { children }
      </header>
    );
  }
}

Header.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Header;
