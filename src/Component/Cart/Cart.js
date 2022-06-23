import React from 'react';
import { connect } from 'react-redux';
import { removeCart } from '../../Redux/Actions/CartActions';

const Cart = (props) => {
    const {cart, removeCart} = props
    return (
        <div>
            <h2>this is cart</h2>
            <ul>
                {
                    cart.map(pd => <li key={pd.cartId}>{pd.name} 
                    <button onClick={() => removeCart(pd.cartId)}>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};
const mapStateToProps =state=>{
    return {
        cart: state.cart,
    }
}
const mapDispatchToProps = {
  removeCart: removeCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);