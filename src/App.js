import React, { Component } from 'react';
import Selection from './Selection';
import Products from './Products';
import SelectionTable from './SelectionTable';
import './App.css';

class App extends Component {
  // Initialize state
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  // Fetch API and set state to the received data
  componentDidMount() {
    fetch('https://www.zamro.nl/actions/ViewProduct-ProductCompare?SKU=115E19,11545A,115E1A,115576')
    .then( (response) => {
      return response.json() })
    .then( (json) => {
      this.setState({data: json.products})
    })
  }

  render() {
    return (
      <div>
        <div>
          <div className="App">
            {/* Check whether the data has asynchronously loaded before passing it as props */}
            {this.state.data.length > 0 ? <Selection products={this.state.data} /> : null}
            {this.state.data.length > 0 ? <Products products={this.state.data} /> : null}
          </div>
          <div>
            {this.state.data.length > 0 ? <SelectionTable products={this.state.data} /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
