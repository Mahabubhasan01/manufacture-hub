import React from "react";
import { useNavigate } from "react-router-dom";

const TableData = ({item}) => {
    const navigate = useNavigate()
    const {name,price,img,quantity,info,minimum} = item
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
            {/* <div class="text-sm opacity-50">United States</div> */}
          </div>
        </div>
      </td>
      <td>
       
        <span class="badge badge-ghost badge-sm font-bold">
        {quantity}
        </span>
      </td>
      <th>
        <button onClick={()=>navigate('/dashboard/addproduct')} class="btn btn-ghost  font-bold">Stock in</button>
      </th>
      <td><button className="btn btn-warning">Delete</button></td>
    </tr>
  );
};

export default TableData;
