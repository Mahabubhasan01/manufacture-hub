import React from "react";
import { useNavigate } from "react-router-dom";

const PartItem = ({ part }) => {
  const navigate = useNavigate()
  const { name, img, price, info, minimum, quantity,_id } = part;
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure className="bg-secondary">
          <img className='h-52' src={img} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{info}</p>
          <p>Price: ${price}</p>
          <p>{minimum}</p>
          <p>{quantity}</p>
          <div class="card-actions justify-center">
            <button onClick={()=> navigate(`/partsdetails/${_id}`)}  class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartItem;
