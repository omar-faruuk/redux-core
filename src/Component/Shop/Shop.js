import React from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import { addToCart } from './../../Redux/Actions/CartActions';

const Shop = (props) => {
    const {products, addToCart} = props
  
    return (
        <div>
           
            {
                products.map(pd => <Product addToCart={addToCart} key={pd.id} product={pd}></Product>)
            }
        </div>
    );
};
const mapStateToProps = state =>{
    return {
        cart: state.cart,
        products: state.products
    }
}
const mapDispatchToProps = {
    addToCart: addToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);