import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../../../../firebase.init";
import Spinner from "../../../../Shared/Spiner/Spinner";

const PaymentMethod = () => {
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
    <div id="summary" class="w-1/4 px-8 py-10">
      <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <h1 class="font-semibold text-xl  border-b pb-8">
        Order Status : <span className="text-yellow-500">Unpaid</span>
      </h1>
      <div class="flex justify-between mt-10 mb-5">
        <span class="font-semibold text-sm uppercase">
          Items {orders.length} <span className="text-xl"></span>
        </span>

        {orders.slice(0, 1).map((order) => (
          <span key={order._id}>
            ${order.price * order.quantity * orders.length}
          </span>
        ))}
      </div>
      <div>
        <label class="font-medium inline-block mb-3 text-sm uppercase">
          Shipping
        </label>
        <select class="block p-2 text-gray-600 w-full text-sm">
          <option>Standard shipping - $10.00</option>
        </select>
      </div>
      <div class="py-10">
        <label
          for="promo"
          class="font-semibold inline-block mb-3 text-sm uppercase"
        >
          Promo Code
        </label>
        <input
          type="text"
          id="promo"
          placeholder="Enter your code"
          class="p-2 text-sm w-full"
        />
      </div>
      <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
        Apply
      </button>
      <div class="border-t mt-8">
        <div class="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          {orders.slice(0, 1).map((order) => (
            <span key={order._id}>
              ${order.price * order.quantity * orders.length}
            </span>
          ))}
        </div>
        <button
          onClick={() => navigate(`/payment`)}
          class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
