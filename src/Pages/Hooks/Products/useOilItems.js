const { useState, useEffect } = require("react");

const useOilItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const url = "https://morning-plains-92955.herokuapp.com/oil";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  });
  return [items];
};
export default useOilItems;
