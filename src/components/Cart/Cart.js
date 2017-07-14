import React from 'react';
import './Cart.css';
import Header from './../Header/Header';
import { connect } from 'react-redux';
import { removeFromCart } from '../../ducks/productsReducer';
import Content from './../Content/Content';
import Footer from './../Footer/Footer';

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
        <div className="shoeDetails">
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        </div>
        <button onClick={()=> this.props.removeFromCart(i)}>Remove</button>
        </div>
      )
    })
    return(
    <div>

    <Header />
    <div className='contentsContainer'>
    {productsInCart}
    </div>
    <Footer />
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
