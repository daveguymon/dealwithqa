import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import NavBar from './../NavBar/NavBar';

export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
    <h1>HOME ROUTE</h1>
    <NavBar />
    <Link to="/products">
    <button>START SHOPPING</button>
    </Link>
    </div>
    )
  }

}
