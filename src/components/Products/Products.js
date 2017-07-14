import React from 'react';
import './Products.css';
import { connect } from 'react-redux';
import Header from './../Header/Header';
import { addToCart } from '../../ducks/productsReducer';
import Footer from './../Footer/Footer';



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
        <div className="shoeDetails">
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        </div>
        <button onClick={() => this.props.addToCart(item)}>Add To Cart</button>
        </div>

      )
    })

    const productsFemale = this.props.products.filter((item) => item.gender === 'f').map((item, i) => {
      return (
      <div key={i}>
      <img src={item.img} />
      <div className="shoeDetails">
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      </div>
      <button onClick={() => this.props.addToCart(item)}>Add To Cart</button>
      </div>
      )
    })

    return (
    <div>
    <Header />
    <h2 className="genderHeader"> Mens Shoes</h2>
    <div className="mensShoes">
    {productsMale}
    </div>
    <h2 className="genderHeader">Womens Shoes</h2>
    <div className="womensShoes">
    {productsFemale}
    </div>
    <Footer />
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
