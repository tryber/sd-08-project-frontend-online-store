import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import Header from '../components/Header';

export default function Cart() {
  return (
    <main>
      <Header showLogo={ false } showBack />

      <h1>Checkout</h1>
    </main>
  );
}
