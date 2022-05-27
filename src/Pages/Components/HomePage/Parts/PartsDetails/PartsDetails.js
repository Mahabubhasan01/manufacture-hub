import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../../../firebase.init";
import usePartsDetails from "../../../../Hooks/usePartsDetails";

const PartsDetails = () => {
  const [user] = useAuthState(auth);
  const [increase,setIncrease] = useState(10)
  const { Id } = useParams();
  const [details] = usePartsDetails(Id);
  const { name, img, price, quantity, minimum, info } = details;
  
  console.log(details);
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img className='md:w-1/2 rounded-lg md:mr-10' src={img} alt="" />
          <div>
            <h1 class="text-5xl font-bold">{name}</h1>
            <p class="py-3"> Product Price: 1 x ${price*increase}</p>
            <div className="flex items-center justify-center">
              <button onClick={()=>setIncrease(increase+1)}>add</button>
              <p>{increase}</p>
              <button onClick={()=>setIncrease(increase-1)}>down</button>
            </div>
            <p class="py-3"> Available Quantity: {quantity}</p>
            <p class="py-3">Minimum {minimum}</p>
            <p class="py-3">{info}</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartsDetails;
