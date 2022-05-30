import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../../../../firebase.init";
import Spinner from "../../../../../Shared/Spiner/Spinner";
import ReviewCardDynamic from "../../../Review/ReviewCard/ReviewCardADynamic";

const Reviews = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const url = `https://morning-plains-92955.herokuapp.com/review/${email}`;
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("review", () =>
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
  console.log(reviews);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      {/* {
                reviews.map(review=><ReviewCardDynamic key={review._id} review={review}/>)
            } */}
    </div>
  );
};

export default Reviews;
