import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './NavBar.css';

function NavBar(props) {
  // console.log(props);
  return (

    <div className="navBar">
    <div className="returnsText">
    <p className="freeReturns">Free shipping and free returns.</p>
    </div>
      <Link to="/products">
      <p>SHOES</p>
      </Link>
      <Link to="/cart">
      <p>CART ({props.cart.length})</p>
      </Link>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(NavBar);
