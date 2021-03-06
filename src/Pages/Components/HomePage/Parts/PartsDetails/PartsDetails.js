import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../../firebase.init";
import usePartsDetails from "../../../../Hooks/usePartsDetails";
import ReviewCard from "../../DashBoard/MyOrders/ReviewCard/ReviewCard";

const PartsDetails = () => {
  const [user] = useAuthState(auth);
  const { Id } = useParams();
  const [details] = usePartsDetails(Id);
  const { name, img, price, quantity, minimum, info } = details;
  const qty = parseInt(quantity);
  const [increase, setIncrease] = useState(1);
  const [minusQ, setMinusQ] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, event) => {
    const productPrice = parseFloat(price * increase);
    const productQuantity = parseFloat(increase);
    const img = user?.photoURL;
    const email = user?.email;
    const order = {
      email: email,
      name: name,
      img: img,
      price: price,
      quantity: data.quantity,
      total: productPrice,
      phone: data.phone,
      address: data.address,
    };
    const url = "https://morning-plains-92955.herokuapp.com/order";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        toast("Successfully Order", name);
        event.target.reset();
      });
  };

  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="hero-content flex-col lg:flex-row">
            <img className="md:w-1/2 rounded-lg md:mr-10" src={img} alt="" />
            <div>
              <h1 class="text-5xl font-bold">Product Name: {name}</h1>
              <p class="py-3">
                {" "}
                Product Price: {increase * 1} x ${price * increase}
              </p>
              <div className="flex justify-center items-center mr-72">
                <p>Quantity</p>
                <div className="flex items-center justify-center mr-72">
                  <span onClick={() => setIncrease(increase + 1)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 cursor-pointer font-bold mx-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                  <p className="font-bold">{increase}</p>
                  <span onClick={() => setIncrease(increase - 1)}>
                    <svg
                      disabled={increase === -1}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 cursor-pointer font-bold mx-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 12H4"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <p class="py-3"> Available Quantity: {quantity - increase}</p>
              <p class="py-3">Minimum {minimum}</p>
              <p class="py-3">{info}</p>
              <div class="form-control w-full max-w-xs">
                <h1>Purchase by : {user?.displayName}</h1>
                <h1>Email : {user?.email}</h1>
                <label
                  htmlFor="company-website"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  {...register("phone")}
                  type="number"
                  name="phone"
                  placeholder="Type here"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div class="form-control w-full max-w-xs">
                <label
                  htmlFor="company-website"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Quantity
                </label>
                <input
                  {...register("quantity")}
                  type="number"
                  name="quantity"
                  placeholder="Type here"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product description
                </label>
                <div className="mt-1">
                  <textarea
                    {...register("address")}
                    id="about"
                    name="address"
                    rows={5}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="you@example.com"
                    defaultValue={""}
                  />
                </div>
              </div>

              <button class="btn btn-primary">Purchase</button>
            </div>
          </div>
        </form>
      </div>
      <ReviewCard />
    </div>
  );
};

export default PartsDetails;
