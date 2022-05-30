import React from "react";
import useParts from "../../../../Hooks/useParts";
import TableData from "../../../../Shared/TableData";

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
              {parts.map((item) => (
                <TableData key={item._id} item={item} />
              ))}
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
