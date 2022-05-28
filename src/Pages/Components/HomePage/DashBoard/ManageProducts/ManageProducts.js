import React from 'react';
import useParts from '../../../../Hooks/useParts';
import TableData from '../../../../Shared/TableData';

const ManageProducts = () => {
  const [parts] = useParts([]);
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
                <th>Quantity</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                parts.map(item=><TableData key={item._id} item={item} />)
              }

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

export default ManageProducts;