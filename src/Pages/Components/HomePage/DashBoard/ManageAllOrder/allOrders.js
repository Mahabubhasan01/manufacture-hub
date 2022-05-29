import React from "react";

const allOrders = ({order}) => {
  const {name,email,img,price,quantity,unpaid} = order
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
              <img
                src={img}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div class="font-bold">{name}</div>
            <div class="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        Zemlak, Daniel and Leannon
        <br />
        <span class="badge badge-ghost badge-sm">
          {quantity}
        </span>
      </td>
      <td>{price}</td>
      <th>
        <button class="btn btn-ghost btn-xs">{unpaid}</button>
      </th>
    </tr>
  );
};

export default allOrders;
