import React from "react";
import { useParams } from "react-router-dom";
import usePartsDetails from "../../../../Hooks/usePartsDetails";

const PartsDetails = () => {
  const { Id } = useParams();
  const [details] = usePartsDetails(Id);
  const { name, img, price, quantity, minimum, info } = details;
  console.log(details);
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img src={img} alt="" />
          <div>
            <h1 class="text-5xl font-bold">{name}</h1>
            <p class="py-6"> Product Price: ${price}</p>
            <p class="py-6"> Available Quantity: {quantity}</p>
            <p class="py-6">Minimum {minimum}</p>
            <p class="py-6">{info}</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartsDetails;
