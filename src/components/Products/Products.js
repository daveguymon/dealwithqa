import React from 'react';
import './Products.css';
import { connect } from 'react-redux';
import NavBar from './../NavBar/NavBar';
import { addToCart } from '../../ducks/productsReducer';


// class Products extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//
//     }
//   }
//
//   render(){
function Products(props) {
    console.log(props)
    const products = props.products.map((item, i) => {
      return (
        <div key={i}>
        <img src={item.img} />
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <button onClick={() => props.addToCart(item)}>Add To Cart</button>
        </div>

      )
    })
    return (
      <div>
    <h1>PRODUCTS ROUTE</h1>
    <NavBar />
    {products}
    </div>

    )
}



function mapStateToProps(state){
  return {
    products: state.products,
    cart: state.cart
  }
}

export default connect(
  mapStateToProps,
  {
    addToCart
  }
)(Products)
