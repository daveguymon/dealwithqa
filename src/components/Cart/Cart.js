import React from 'react';
import './Cart.css';
import NavBar from './../NavBar/NavBar';
import { connect } from 'react-redux';
import { removeFromCart } from '../../ducks/productsReducer';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }

  render(){

    const productsInCart = this.props.cart.map((item, i)=> {
      return (
        <div key={i}>
        <img src={item.img} />
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <button onClick={()=> this.props.removeFromCart(i)}>Remove</button>
        </div>
      )
    })
    return(
    <div>
    <h1>CART COMPONENT</h1>
    <NavBar />
    {productsInCart}
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, {removeFromCart})(Cart)
