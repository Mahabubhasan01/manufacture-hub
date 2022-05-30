import React from 'react';

const Admin = ({adm}) => {
    console.log(adm);
    const {email,role,name} = adm
    return (
        <tr>
        <th>
        
        </th>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img
                  src="/tailwind-css-component-profile-2@56w.png"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div class="font-bold">{name}</div>
              
            </div>
          </div>
        </td>
        <td>
         {email}
       
        </td>
        <td>{role}</td>
        <th>
          <button class="btn btn-ghost btn-xs">Make Admin</button>
        </th>
      </tr>
    );
};

export default Admin;