import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content overflow-hidden ">
        {/* flex flex-col items-center justify-center */}
          {/*  <!-- Page content here --> */}
          <label
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet />
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content font-bold">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to='/dashboard/myprofile'>My Profile</Link>
            </li>
            <li>
              <Link to='/dashboard/myorders'>My Orders</Link>
            </li>
            <li>
              <Link to='/dashboard/addreview'>Add a Review</Link>
            </li>
            <li>
              <Link to='/dashboard/addproduct'>Add a New Product</Link>
            </li>
            <li>
              <Link to='/dashboard/manageorder'>Manage Products</Link>
            </li>
            <li>
              <Link to='/dashboard/manageallorder'>Manage All Order</Link>
            </li>
            <li>
              <Link to='/dashboard/makeadmin'>Make an Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
