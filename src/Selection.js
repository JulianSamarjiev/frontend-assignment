import React, { Component } from 'react';
import './Selection.css';

class Selection extends Component {
  render() {
    return (
      <div className="Selection">
        {/* Map through all products and create a checkbox for each */}
        {
          this.props.products.map((product, index) => {
            return <div onClick={this.handleSelect} className="Selection-product-select" key={index}>
                      <input id={'myInput-' + index} type="checkbox" />
                      <label htmlFor={'myInput-' + index}><b>{product.name}</b></label>
                    </div>
          })
        }
      </div>
    );
  }
}

export default Selection;
