import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../../../Shared/Spiner/Spinner";
import AllOrders from "./AllOrders";

const ManageAllOrder = () => {
  const url = `https://morning-plains-92955.herokuapp.com/order`;
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("product", () =>
    fetch(
      url
      /*  {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  } */
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner />;
  }
  console.log(orders);
  return (
    <div>
      <div>
        <div class="overflow-x-auto w-full">
          <table class="table w-full">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <AllOrders order={order} key={order._id} />
              ))}

              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-3@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">{orders.length}</div>
                      <div class="text-sm opacity-50">China</div>
                    </div>
                  </div>
                </td>
                <td>
                  Carroll Group
                  <br />
                  <span class="badge badge-ghost badge-sm">Tax Accountant</span>
                </td>
                <td>Red</td>
                <th>
                  <button class="btn btn-ghost bg-base-100 ">Make Admin</button>
                </th>
              </tr>

              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-4@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">Marjy Ferencz</div>
                      <div class="text-sm opacity-50">Russia</div>
                    </div>
                  </div>
                </td>
                <td>
                  <br />
                  <span class="badge badge-ghost badge-sm">
                    Office Assistant I
                  </span>
                </td>
                <td>Crimson</td>
                <th>
                  <button class="btn btn-ghost btn-xs">Make Admin</button>
                </th>
              </tr>

              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-5@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">Yancy Tear</div>
                      <div class="text-sm opacity-50">Brazil</div>
                    </div>
                  </div>
                </td>
                <td>
                  Wyman-Ledner
                  <br />
                  <span class="badge badge-ghost badge-sm">
                    Community Outreach Specialist
                  </span>
                </td>
                <td>Indigo</td>
                <th>
                  <button class="btn btn-ghost btn-xs">Make Admin</button>
                </th>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrder;
