import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Selected Products: {cart.length}</p>
        </div>
    );
};

export default Cart;