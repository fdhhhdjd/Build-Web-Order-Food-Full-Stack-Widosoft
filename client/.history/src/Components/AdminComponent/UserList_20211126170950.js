import React from "react";

const UserList = () => {
  return (
    <>
      <div className="userList">
        asdasd
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
