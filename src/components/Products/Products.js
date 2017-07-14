import React from 'react';
import './Products.css';
import { connect } from 'react-redux';
import NavBar from './../NavBar/NavBar';
import { addToCart } from '../../ducks/productsReducer';


class Products extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

  render(){

    const productsMale = this.props.products.filter((item)=> item.gender === 'm').map((item, i) => {
      return (
        <div key={i}>
        <img src={item.img} />
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <button onClick={() => this.props.addToCart(item)}>Add To Cart</button>
        </div>

      )
    })

    const productsFemale = this.props.products.filter((item) => item.gender === 'f').map((item, i) => {
      return (
        <div key={i}>
      <img src={item.img} />
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <button onClick={() => this.props.addToCart(item)}>Add To Cart</button>
      </div>
      )
    })

    return (
    <div>
    <h1>PRODUCTS ROUTE</h1>
    <NavBar />
    <h2> Mens Shoes</h2>
    {productsMale}
    <h2>Womens Shoes</h2>
    {productsFemale}
    </div>

    )
}
}



function mapStateToProps(state){
  return {
    products: state.products,
    cart: state.cart
  }
}

export default connect(mapStateToProps,
  {addToCart})(Products)
