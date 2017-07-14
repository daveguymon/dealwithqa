const initialState ={
  products: [
    {
      id: 1,
      name: 'Adrenaline GTS 17',
      price: '$150.00',
      img: './images/mens_adrenaline_gts_17.jpg',
      gender: 'm'
    },
    {
      id: 2,
      name: ' Beast 16',
      price: '$110.00',
      img: './images/mens_beast_16.jpg',
      gender: 'm'
    },
    {
      id: 3,
      name: 'Beast 16 LE',
      price: '$120.00',
      img: './images/mens_beast_16_le.jpg',
      gender: 'm'
    },
    {
      id: 4,
      name: 'Defyance 9',
      price: '$120.00',
      img: './images/mens_defyance_9.jpg',
      gender: 'm'
    },
    {
      id: 5,
      name: 'Ghost 10',
      price: '$130.00',
      img: './images/mens_ghost_10.jpg',
      gender: 'm'
    },
    {
      id: 6,
      name: 'Adrenaline GTS',
      price: '$90.00',
      img:'./images/womens_adrenaline_gts.jpg',
      gender: 'f'
    },
    {
      id: 7,
      name: 'Pureflow 6',
      price: '$110.00',
      img: './images/womens_pureflow_6.jpg',
      gender: 'f'
    },
    {
      id: 8,
      name: 'Adrenaline GTS 17',
      price: '$100.00',
      img: './images/womens_adrenaline_gts_17.jpg',
      gender: 'f'
    },
    {
      id: 9,
      name: 'Neuro 2',
      price: '$78.00',
      img: './images/womens_neuro_2.jpg',
      gender: 'f'
    },
    {
      id: 10,
      name: 'Ghost 10',
      price: '$120.00',
      img: './images/womens_ghost_10.jpg',
      gender: 'f'
    },
  ],
  cart: []
}

const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case ADD_TO_CART:
        return (
          Object.assign({}, state, {cart: [...state.cart, action.payload]})
        )
    case DELETE_FROM_CART:
    const newCartArr = state.cart.filter((item, i)=> i !== action.payload)
        return (
          Object.assign({}, state, {cart: newCartArr })
        )
        default:
          return state;
  }

}

export function addToCart( id ) {
  return {
    type: ADD_TO_CART,
    payload: id
  }
}

export function removeFromCart(index) {
  return {
    type: DELETE_FROM_CART,
    payload: index
  }
}
