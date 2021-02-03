import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { TiArrowBackOutline } from 'react-icons/ti';

import styles from './styles.module.css';

class BackButton extends Component {
  render() {
    return (
      <Link to="/">
        <IconContext.Provider value={ { className: styles.backButton } }>
          <TiArrowBackOutline />
        </IconContext.Provider>
      </Link>
    );
  }
}

export default BackButton;
