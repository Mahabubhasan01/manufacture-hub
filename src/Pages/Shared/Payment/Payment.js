import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import Spinner from "../Spiner/Spinner";
import PaymentCard from "./PaymentCard";

const Payment = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
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
      {orders.slice(0, 1).map((order) => (
        <PaymentCard key={order._id} order={order} />
      ))}
    </div>
  );
};

export default Payment;
