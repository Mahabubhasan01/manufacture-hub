import React from "react";

const CustomCard = ({info,number}) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl my-10">
      <div class="card-body">
        <div class="card-actions justify-between flex items-center">
         <p>{info}</p>
         <p>{number}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
