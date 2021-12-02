import React, { useState } from "react";
import { userRows } from "../../utils/DataChart";
import { DataGrid } from "@mui/x-data-grid";
const UserList = () => {
  const [data, setData] = useState(userRows);

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
