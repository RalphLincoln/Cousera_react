import React, { Component } from 'react';
import './App.css';

import { DISHES } from './shared/dishes';

import MenuComponent from './Component/MenuComponent';

import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color='primary' >
          <div className="container">
            <NavbarBrand href='/'>Ristorante con fusion</NavbarBrand>
          </div>
        </Navbar>
        <MenuComponent dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
