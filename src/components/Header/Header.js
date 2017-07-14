import React from 'react';
import NavBar from './../NavBar/NavBar';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
    <Link to="/">
    <img className="brooksLogo" src = "./images/Brooks.png" />
    </Link>
    <NavBar />
    </div>
  )
}
