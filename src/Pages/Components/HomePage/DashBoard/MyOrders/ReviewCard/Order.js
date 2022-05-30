import React from "react";
import { Link } from "react-router-dom";

const Order = ({ order }) => {
  const { name, img, price, quantity,_id,total } = order;
  const totalA = parseFloat(total*quantity)
  const deleteItem = id =>{
    const url  =  `http://localhost:5000/order/${id}`;
    fetch(url,{
      method:'DELETE',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify()
    }).then(res=>res.json()).then(data=>{
     console.log(data)
    })
  }

  
  return (
    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div class="flex w-2/5">
        {/*  <!-- product --> */}
        <div class="w-20">
          <img class="h-24" src={img} alt="" />
        </div>
        <div class="flex flex-col justify-between ml-4 flex-grow">
          <span class="font-bold text-xl">{name}</span>
          {/* <span class="text-red-500 text-xs">Apple</span> */}

          <label for="order" class="btn btn-error btn-outline btn-sm w-20 modal-button">
            <Link
              to="#"
              class="font-semibold hover:text-black text-primary  text-xs"
            >
              Remove
            </Link>
          </label>

          <input type="checkbox" id="order" class="modal-toggle" />
          <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
              <h3 class="font-bold text-lg">
                You are remove item from this list
              </h3>
              <p class="py-4">
               Are you sure want to remove this item <span className="font-bold text-xl">{name}</span>
              </p>
              <div class="modal-action">
                <label onClick={()=>deleteItem(`${_id}`)} for="order" class="btn bg-success">
                  Yes!
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center w-1/5">
        {/*  <svg
                    class="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>

                  <input
                    class="mx-2 border text-center w-8"
                    type="text"
                    value="1"
                  />

                  <svg
                    class="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg> */}
        {quantity}
      </div>
      <span class="text-center w-1/5 font-semibold text-sm">{price}</span>
      <span class="text-center w-1/5 font-semibold text-sm">{totalA}</span>
      
    </div>
  );
};

export default Order;
