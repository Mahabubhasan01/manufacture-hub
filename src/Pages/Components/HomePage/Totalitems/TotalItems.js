import React from "react";
import { Link, Outlet } from "react-router-dom";
import Engine from "../Category/Engine/Engine";

const TotalItems = () => {
  return (
    <div className="my-5 ">
      <div class="tabs items-center flex justify-center">
        <Link to='/engine' className="tab tab-bordered text-xl text-slate-900 font-bold">Engine</Link >
        <Link to='/tyers' className="tab tab-bordered tab-active text-xl text-slate-900 font-bold">Body</Link >
        <Link to='/oil' className="tab tab-bordered text-xl text-slate-900 font-bold">Oil</Link >
      </div>
      <Engine/>
      <Outlet/>
    </div>
  );
};

export default TotalItems;
