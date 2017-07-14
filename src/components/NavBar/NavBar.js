import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <Link to="/">
      <p>HOME</p>
      </Link>
      <Link to="/products">
      <p>STORE</p>
      </Link>
      <Link to="/cart">
      <p>CART</p>
      </Link>
    </div>
  )
}
