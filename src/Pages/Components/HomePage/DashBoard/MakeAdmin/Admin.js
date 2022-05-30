import React from "react";

const Admin = ({ adm }) => {
  console.log(adm);
  const { email, role, name } = adm;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" class="checkbox" />
        </label>
      </th>{" "}
      <td>
        <div class="flex items-center space-x-3">
          <div class="avatar"></div>
          <div>
            <div class="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>{role}</td>
      <th>
        <button class="btn btn-success btn-md  font-bold">Make Admin</button>
      </th>
    </tr>
  );
};

export default Admin;
