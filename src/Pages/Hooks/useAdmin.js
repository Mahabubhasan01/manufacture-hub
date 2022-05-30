import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [admin, setAdmin] = useState([]);
  useEffect(() => {
    const url = `https://morning-plains-92955.herokuapp.com/user/${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, [email]);
  return [admin];
};
export default useAdmin;
