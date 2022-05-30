import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

import { Link } from "react-router-dom";
import auth from "../../../../firebase.init";
import "./Navbar.css";
import Profile from "./Profile/Profile";
import logo from "./logo.png";
import { toast } from "react-toastify";
import useAdmin from "../../../Hooks/useAdmin";

const Navbar = ({ children }) => {
  const [darkMood, setDarkMode] = useState();
  const [user, loading] = useAuthState(auth);
  const email = user?.email
  const [admin] = useAdmin(email)

  const item = (
    <>
      <li>
        <Link className="" to="/">
          Home
        </Link>
      </li>
      {/* <li>
        <Link to="/">home</Link>
      </li> */}
      
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>

      <li>
        <Link to="/Portfolio">Portfolio</Link>
      </li>

      <li>
        <Link to="/">Contact</Link>
      </li>
      {user||admin.role?<li>
        <Link to="/dashboard">DashBoard</Link>
      </li>:''}
      {!user ? (
        <li>
          <Link to="/login">Login</Link>
        </li>
      ) : (
        <li
          onClick={() => {
            {
              signOut(auth);
            }
            toast("Successfully logout");
          }}
        >
          <Link to="/">Logout</Link>
        </li>
      )}
    </>
  );
  return (
    <div
      className="navbar bg-primary rounded-t-lg "
      data-theme={darkMood ? "dark" : "light"}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52 font-bold text-white  "
          >
            {item}
          </ul>
        </div>
        <Link to="/" className={darkMood ? "" : "text-black"}>
          {/* <img className="m-0 p-0" src={logo} alt="" /> */}
          <h1 className="font-bold  text-3xl mx-3 text-success font-serif"><span>Car</span>PaEx</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex bg-primary">
        <ul className="menu menu-horizontal p-0 font-bold text-white">
          {item}
        </ul>
      </div>
      <Profile
        darkMood={darkMood}
        setDarkMode={setDarkMode}
        user={user}
      ></Profile>
    </div>
  );
};

export default Navbar;
