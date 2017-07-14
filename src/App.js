import React, { Component } from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

class App extends Component {
  render() {
    return (
      <div className="">
        <HashRouter>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/products' component={Products} />
            <Route path='/cart' component={Cart} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
