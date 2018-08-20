import React, { Component } from 'react';
import Product from './Product';
import './Products.css';

class Products extends Component {
  render() {
    return (
      <div className="Products">
        {/* Map through all products and pass the product data as props to child component */}
        {
          this.props.products.map((product, index) => {
            return <Product product={product} key={index} />
          })
        }
      </div>
    );
  }
}

export default Products;
