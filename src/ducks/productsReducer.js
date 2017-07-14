const initialState ={
  products: [
    {
      id: 1,
      name: 'Adrenaline GTS',
      price: '$150.00',
      img: 'http://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dw17c62320/images/ProductImages/110241/110241_015_a_ZM.jpg?sw=220'
    },
    {
      id: 2,
      name: ' Beast 16',
      price: '$110.00',
      img: 'http://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dwa4e0dd4c/images/ProductImages/110227/110227_005_a_ZM.jpg?sw=220'
    },
    {
      id: 3,
      name: 'Glycerin 15',
      price: '$120.00',
      img: 'http://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dwae8a19a5/images/ProductImages/110258/110258_012_a_ZM.jpg?sw=220'
    },
    {
      id: 4,
      name: 'Defyance 9',
      price: '$120.00',
      img: 'http://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dw7db002be/images/ProductImages/110214/110214_462_a_ZM.jpg?sw=220'
    },
    {
      id: 5,
      name: 'Ghost 10',
      price: '$130.00',
      img: 'http://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dweaad3afc/images/ProductImages/110257/110257_095_a_ZM.jpg?sw=220'
    },
    {
      id: 6,
      name: 'Adrenaline GTS',
      price: '$90.00',
      img:'http://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dw1b128d3d/images/ProductImages/120231/120231_175_a_ZM.jpg?sw=220'
    },
    {
      id: 7,
      name: 'Pureflow 6',
      price: '$110.00',
      img: 'http://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dw89ba26fd/images/ProductImages/120237/120237_443_a_ZM.jpg?sw=220'
    },
    {
      id: 8,
      name: 'Adrenaline GTS 17',
      price: '$100.00',
      img: 'http://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dwa7e571c8/images/ProductImages/120231/120231_169_a_ZM.jpg?sw=220'
    },
    {
      id: 9,
      name: 'Neuro 2',
      price: '$78.00',
      img: 'http://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dwb1d58ea5/images/ProductImages/120235/120235_655_a_ZM.jpg?sw=220'
    },
    {
      id: 10,
      name: 'Ghost 10',
      price: '$120.00',
      img: 'http://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dw50271645/images/ProductImages/120246/120246_067_a_ZM.jpg?sw=220'
    },
  ],
  cart: []
}

const ADD_TO_CART = 'ADD_TO_CART';

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case ADD_TO_CART:
      {
        return (
          Object.assign({}, state, {cart: [...state.cart, action.payload]})
        )
      }
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
