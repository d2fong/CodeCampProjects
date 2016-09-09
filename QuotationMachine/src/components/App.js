import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import QuoteBox from './Quotes.js';
import logo from '../logo.svg';


import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <Grid className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Quotation Machine</h2>
        </div>
        <p className="App-intro">
          To get started, click the New Quote button.
        </p>
        <QuoteBox/>
      </Grid>
    );
  }
}

export default App;
