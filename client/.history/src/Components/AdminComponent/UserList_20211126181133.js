import React from "react";
import { DataGrid } from "../../Imports/Index";
import { userRows } from "../../utils/DataChart";
const UserList = ({ data, columns }) => {
  return (
    <>
      <div className="userList">
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default UserList;
