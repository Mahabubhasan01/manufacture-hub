import React from "react";

const CustomCard = ({ info, number }) => {
  return (
    <div class="!card w-96 bg-base-100 shadow-xl my-10 mx-4">
      
      <div class="card-body">
        <div class="card-actions justify-between flex items-center">
          <p className="text-xl">{info}</p>
          <p className="text-4xl font-bold">{number}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
