import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import Spinner from "../Spiner/Spinner";

const Payment = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const url = `http://localhost:5000/order/${email}`;
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
      {orders.length}
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
