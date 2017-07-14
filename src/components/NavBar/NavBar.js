import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

function NavBar(props) {
  console.log(props);
  return (
    <div>
      <Link to="/">
      <p>HOME</p>
      </Link>
      <Link to="/products">
      <p>STORE</p>
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
