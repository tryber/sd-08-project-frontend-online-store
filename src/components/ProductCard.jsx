import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
 
class ProductCard extends Component {
  render() {
    const { product, click } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <Card className="rounded m-3 shadow" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ thumbnail } />
        <Card.Body>
          <Card.Title>{ title }</Card.Title>
          <span className="text-danger display-4">{ price }</span>
          <Link
                data-testid="product-detail-link"
                to={ { pathname: `/product-details/${id}`, product } }
              >
                Ver Detalhes
              </Link>
          <Button variant="primary"
          type="button"
                data-testid="product-add-to-cart"
                onClick={ () => click(product) }
              >
                Adicionar ao Carrinho
              </Button>
        </Card.Body>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
  click: PropTypes.func.isRequired,
};

export default ProductCard;
