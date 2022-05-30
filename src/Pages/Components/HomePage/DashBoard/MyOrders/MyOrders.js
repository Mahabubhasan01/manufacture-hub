import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../../../firebase.init";
import Spinner from "../../../../Shared/Spiner/Spinner";
import PaymentMethod from "./PaymentMethod";
import Order from "./ReviewCard/Order";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const navigate = useNavigate();
  const url = `https://morning-plains-92955.herokuapp.com/order/${email}`;
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("product", () =>
    fetch(
      url
      /*  {
  method: "GET",
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
} */
    ).then((res) => res.json())
  );
  refetch();
  console.log(orders);
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div class="bg-gray-100">
        <div class="container mx-auto mt-10">
          <div class="flex shadow-md my-10">
            <div class="w-3/4 bg-white px-10 py-10">
              <div class="flex justify-between border-b pb-8">
                <h1 class="font-semibold text-2xl">Shopping Cart</h1>
                <h2 class="font-semibold text-2xl">{orders.length} Items</h2>
              </div>
              <div class="flex mt-10 mb-5">
                <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 class="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Quantity
                </h3>
                <h3 class="font-semibold   text-gray-600 text-xs uppercase w-1/5 text-center">
                  Price
                </h3>
                <h3 class="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Total
                </h3>
              </div>
              {orders.map((order) => (
                <Order key={order._id} order={order} />
              ))}

              <Link
                to="/"
                class="flex font-semibold text-indigo-600 text-sm mt-10"
              >
                <svg
                  class="fill-current mr-2 text-indigo-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </Link>
            </div>

            <PaymentMethod />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
