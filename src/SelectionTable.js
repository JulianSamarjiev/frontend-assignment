import React, { Component } from 'react';

class SelectionTable extends Component {
  render() {
    // Use object keys for titles of a dynamic table
    const productFeaturesTitle = Object.keys(this.props.products[0]).map((key, index) => {
      // Ignore the properties already shown in the ./Product component
      if (key !== 'productImage' && key !== 'name' && key !== 'grossPrice') {
        return <tr key={index}>
                {/* set object key as title */}
                <td>{key}</td>
                <td>.....</td>
              </tr>
      }
    })

    return (
      <div className="SelectionTable">
        <table>
          <tbody>
            {productFeaturesTitle}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SelectionTable;
