import React from 'react';

const PaymentCard = ({order}) => {
    const {name,price,quantity,_id} = order
    return (
        <div class="card w-96 mx-auto bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>Product Id: {_id}</p>
          <p>Price: {price*quantity}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default PaymentCard;