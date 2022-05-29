import React from 'react';
import { useNavigate } from 'react-router-dom';

const OilItems = ({item}) => {
  const navigate = useNavigate()
    const {name,img,price,quantity,minimum,info,_id}=item
    return (
        <div>
            <div class="card mx-auto w-96 bg-base-100 shadow-md">
        <figure className='bg-red-400'>
          <img  className='h-52 ' src={img} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title font-bold">Name: {name}</h2>
          <p className="text-xl font-bold">Product type: <span className="font-thin">{info}</span></p>
          <p className="text-xl font-bold">Price: $<span className="font-bold">{price}</span> </p>
          <p className="font-bold">Minimum: {minimum}</p>
          <p className="font-bold">Available: {quantity}</p>
          <div class="card-actions justify-center">
            <button onClick={()=> navigate(`/partsdetails/${_id}`)}  class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default OilItems;