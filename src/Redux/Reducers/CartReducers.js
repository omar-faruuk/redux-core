
import { ADD_TO_CART, REMOVE_FROM_CART } from './../Actions/CartActions';

const initialstate = {
    cart: [],
    products: [
        {name:"apple laptop",id:1},
        {name:"hp laptop",id:2},
        {name:"dell laptop",id:3},
        {name:"asus laptop",id:4},
        {name:"lenovo laptop",id:5}
    ]
}
export const cartReducers = (state = initialstate, action) =>{
   switch(action.type){
    case ADD_TO_CART:
        const newItem ={
            name: action.name,
            productId: action.id,
            cartId: state.cart.length + 1
        }
        const newCart = [...state.cart, newItem]
        return {...state, cart: newCart};

    case REMOVE_FROM_CART:
        const id = action.id;
        const remainingCart = state.cart.filter(item => item.cartId !== id);
        return {...state, cart: remainingCart}    
    default:
        return state;
   }
}