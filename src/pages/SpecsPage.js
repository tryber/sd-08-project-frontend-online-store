import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReturnButoon from '../components/ReturnButton';
import SpecsTemplate from '../components/SpecsTemplate';
import { getProductsFromCategoryAndQuery } from '../services/api';

class SpecsPage extends Component {
  constructor() {
    super();

    this.state = {
      specsApiReturn: [],
      loading: false,
    };
    this.specHandler = this.specHandler.bind(this);
  }

  componentDidMount() {
    const { match: { params: { categoryID, specID } } } = this.props;
    this.specHandler(categoryID, specID);
  }

  async specHandler(categoryID, specID) {
    const apiIdReturn = (await getProductsFromCategoryAndQuery(categoryID, ''))
      .results.find((element) => element.id === specID);
    this.setState({
      specsApiReturn: apiIdReturn,
      loading: true,
    });
  }

  render() {
    const { specsApiReturn, loading } = this.state;
    const loadingTemplate = <h1>LOADING</h1>;
    return (
      <>
        <ReturnButoon />
        {loading ? <SpecsTemplate itemInfo={ specsApiReturn } /> : loadingTemplate }
      </>
    );
  }
}

export default SpecsPage;

SpecsPage.propTypes = {
  categoryID: PropTypes.string,
  specID: PropTypes.string,

}.isRequired;
