import { createStore } from 'redux'
import { cartReducers } from './../Reducers/CartReducers';


const cartStore = createStore(cartReducers)

export default cartStore