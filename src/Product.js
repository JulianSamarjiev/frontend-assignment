import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
  render() {
    // Loop through all badge images and create image elements for each
    const badges = this.props.product.badges.split('|').map((badgeImageUrl, index) => {
                    return <img className="Product-badges" src={badgeImageUrl} alt="Badge" key={index} />
                  })
    return (
      <div className="Product">
        {/* Access product data as props passed from parent component */}
        <img className="Product-image" src={this.props.product.productImage} alt={this.props.product.name} />
        <div className="Product-name"><b>{this.props.product.name}</b></div>
        <div className="Product-price">{this.props.product.grossPrice}</div>
        <div className="Product-price-note">per stuk / excl. btw</div>
        <hr />
        {/* Call the 'badges' variable */}
        <div>{badges}</div>
      </div>
    );
  }
}

export default Product;
