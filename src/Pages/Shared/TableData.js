import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const TableData = ({ item }) => {
  const [user] = useAuthState(auth);

  const { name, price, img, quantity, info, minimum, _id } = item;
  const deleteItem = (id) => {
    const url = `https://morning-plains-92955.herokuapp.com/parts/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const navigate = useNavigate();

  return (
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
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div class="font-bold">{name}</div>
            {/* <div class="text-sm opacity-50">United States</div> */}
          </div>
        </div>
      </td>
      <td>
        <span class="badge badge-ghost badge-sm font-bold">{quantity}</span>
      </td>
      <th>
        <button
          onClick={() => navigate("/dashboard/addproduct")}
          class="btn btn-ghost  font-bold"
        >
          Stock in
        </button>
      </th>
      <label
        for="order"
        class="btn btn-error btn-outline btn-sm w-20 modal-button mt-5"
      >
        <Link
          to="#"
          class="font-semibold hover:text-black text-primary   text-xs"
        >
          Remove
        </Link>
      </label>

      <input type="checkbox" id="order" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">You are remove item from this list</h3>
          <p class="py-4">
            Are you sure want to remove this item{" "}
            <span className="font-bold text-xl">{name}</span>
          </p>
          <div class="modal-action">
            <label
              onClick={() => deleteItem(`${_id}`)}
              for="order"
              class="btn bg-success"
            >
              Yes!
            </label>
          </div>
        </div>
      </div>
    </tr>
  );
};

export default TableData;
