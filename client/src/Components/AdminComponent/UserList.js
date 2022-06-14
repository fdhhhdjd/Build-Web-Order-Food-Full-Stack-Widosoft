import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import moment from "moment";
import "moment/locale/vi";
import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { GlobalState } from "../../Contexts/GlobalState";
import { AiFillDelete } from "../../Imports/Icons";
import { UserLists } from "../../Styles/StylePages/Admin/UserLists";
import { API_URL } from "../../utils/Config";

const UserList = () => {
  const state = useContext(GlobalState);
  const { token } = useSelector((state) => state.authAdmin);
  const [callback, setCallback] = state.callback;
  const [loading, setLoading] = useState(false);

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      return await swal({
        title: "Are you sure you want delete ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.delete(`${API_URL}/admin/users/delete/${id}`, {
            headers: { Authorization: `Bearer ${token.accessToken}` },
          });

          setCallback(!callback);
          setLoading(false);
          swal("Delete successfully, wait Loading... 😉 !", {
            icon: "success",
          });
        } else {
          swal("Thank you for 😆'!");
        }
      });
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

  const { allUsers } = useSelector((state) => state.authAdmin);
  const img =
    "https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg";
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "hoten",
      headerName: "DisplayName and Image",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.url || img} alt="" />
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
    { field: "email", headerName: "Email", width: 250 },
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
      headerName: "Date",
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
      field: "dienthoai",
      headerName: "Phone",
      width: 180,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.dienthoai}</div>;
      },
    },
    {
      field: "admin",
      headerName: "Position",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {(params.row.admin === 1 && "Admin") ||
              (params.row.admin === 0 && "Customer")}
          </div>
        );
      },
    },

    {
      field: "createdAt",
      headerName: "Date Create",
      width: 160,
      renderCell: (params) => {
        console.log(params);
        return (
          <div className="userListUser">
            {moment(`${params.row.createdAt}`).format("Do MMM YYYY")}
          </div>
        );
      },
    },
    {
      field: "updatedAt",
      headerName: "Date UpdateAt",
      width: 170,
      renderCell: (params) => {
        console.log(params);
        return (
          <div className="userListUser">
            {moment(`${params.row.updatedAt}`).format("Do MMM YYYY")}
          </div>
        );
      },
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/newUser/" + params.row.id}>
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
          getRowId={(r) => r.id}
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
