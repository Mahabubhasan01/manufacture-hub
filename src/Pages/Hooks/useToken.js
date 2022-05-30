import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.email?.email;
    const activeUser = { email: email };
    if (email) {
      const Url = `https://morning-plains-92955.herokuapp.com/user/${email}`;
      fetch(Url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(activeUser),
      })
        .then((res) => res.json())
        .then((result) => {
          const accessToken = result.token;
          localStorage.setItem("token", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token, setToken];
};
export default useToken;
