import { useEffect, useState } from "react";

const usePartsDetails = (id) => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const Url = `https://morning-plains-92955.herokuapp.com/parts/${id}`;
    fetch(Url)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);
  return [details];
};
export default usePartsDetails;
