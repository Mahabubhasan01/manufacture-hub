import { useEffect, useState } from "react";

const useUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = `https://morning-plains-92955.herokuapp.com/user`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return [users];
};
export default useUser;
