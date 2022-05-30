import { useEffect, useState } from "react";

const useReview = (email) => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch(`https://morning-plains-92955.herokuapp.com/review/${email}`);
  }, [email]);
  return [review];
};
export default useReview;
