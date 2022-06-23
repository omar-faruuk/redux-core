import React from 'react';


const Product = (props) => {
    const {product, addToCart} = props
    return (
        <div style={{border: "1px solid gray",padding:"10px"}}>
            <h2>{product.name}</h2>
            <button onClick={()=> addToCart(product.id, product.name)}>Add to cart</button>
        </div>
    );
};

export default Product;