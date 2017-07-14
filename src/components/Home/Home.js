import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Footer from './../Footer/Footer';
import Header from './../Header/Header';
import Content from './../Content/Content';

export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {


    return (
      <div>
        <Header />
        <Content />
        <Footer />
    </div>
    )
  }

}
