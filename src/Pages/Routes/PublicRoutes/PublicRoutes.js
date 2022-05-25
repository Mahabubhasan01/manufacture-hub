import Login from "../../Authentication/Login/Login";
import Home from "../../Components/HomePage/Home";

export const PublicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/login", name: "Login", Component: Login },
];
