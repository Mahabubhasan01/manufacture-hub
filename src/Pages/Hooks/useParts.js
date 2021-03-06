import { useEffect, useState } from "react";

const useParts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    const url = "https://morning-plains-92955.herokuapp.com/parts";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setParts(data));
  });
  return [parts];
};
export default useParts;
