import React from 'react';

const Cart = (props) => {
    console.log(props);
    const { carts } = props;
    const total = carts.reduce((previous, cart) => previous + cart.doctorVisit, 0)
    return (
        <div>
            <p className='fw-bold'>Total Charge : ${total} </p>
        </div>
    );
};

export default Cart;