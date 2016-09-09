import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import QuoteBox from './components/Quotes.js';
import logo from './logo.svg';


import './App.css';
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


// import React, { Component } from 'react';
// import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';

// class App extends Component {
//   render() {
//     return (
//       <div className=>
//         <Navbar inverse fixedTop>
//           <Grid>
//             <Navbar.Header>
//               <Navbar.Brand>
//                 <a href="/">React App</a>
//               </Navbar.Brand>
//               <Navbar.Toggle />
//             </Navbar.Header>
//           </Grid>
//         </Navbar>
//         <Jumbotron>
//           <Grid>
//             <h1>Welcome to React</h1>
//             <p>
//               <Button
//                 bsStyle="success"
//                 bsSize="large"
//                 href="http://react-bootstrap.github.io/components.html"
//                 target="_blank">
//                 View React Bootstrap Docs
//               </Button>
//             </p>
//           </Grid>
//         </Jumbotron>
//       </div>
//     );
//   }
// }