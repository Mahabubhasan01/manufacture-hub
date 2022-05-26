import React from 'react';

const EngineItem = ({item}) => {
    const {name,img,price,quantity,minimum,info}=item
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
        <figure className='bg-primary'>
          <img className='h-52' src={img} alt="Shoes" />
        </figure  >
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{info}</p>
          <p>Price: ${price}</p>
          <p>{minimum}</p>
          <p>{quantity}</p>
          <div class="card-actions justify-center">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default EngineItem;