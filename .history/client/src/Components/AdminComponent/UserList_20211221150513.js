import React, { useState } from "react";
import { userRows } from "../../utils/DataChart";
import { AiFillDelete } from "../../Imports/Icons";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { UserLists } from "../../Styles/StylePages/Admin/UserLists";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/vi";
const UserList = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const { allUser } = useSelector((state) => state.authAdmin);
  const allUsers = allUser.data;
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "hoten",
      headerName: "displayName",
      width: 220,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.hoten}
          </div>
        );
      },
    },
    {
      field: "username",
      headerName: "UserName",
      width: 200,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.username}</div>;
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "gioitinh",
      headerName: "Sex",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {(params.row.gioitinh === 1 && "Nam") ||
              (params.row.gioitinh === 0 && "Nữ")}
          </div>
        );
      },
    },
    {
      field: "ngaysinh",
      headerName: "Birth Day",
      width: 160,
    },
    {
      field: "address",
      headerName: "Address",
      width: 160,
      renderCell: (params) => {
        console.log(params);
        return (
          <div className="userListUser">
            {moment(`${params.row.ngaysinh}`).format("Do MMM YYYY")}
          </div>
        );
      },
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 160,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.phone}</div>;
      },
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <AiFillDelete
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <>
      <UserLists />
      <div className="userList">
        <DataGrid
          rows={allUsers}
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
