import React from "react";
import { Link, Outlet } from "react-router-dom";

const TotalItems = () => {
  return (
    <div className="my-5 ">
      <div class="tabs items-center flex justify-center">
        <Link to='/engine' className="tab tab-bordered">Engine</Link >
        <Link to='/body' className="tab tab-bordered tab-active">Body</Link >
        <Link to='/oil' className="tab tab-bordered">Oil</Link >
      </div>
      <Outlet/>
    </div>
  );
};

export default TotalItems;
