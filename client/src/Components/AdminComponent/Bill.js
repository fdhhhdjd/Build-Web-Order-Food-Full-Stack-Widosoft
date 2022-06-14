import React, { useState, useContext, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { ProductStyle } from "../../Styles/StylePages/ProductsAdminStyle";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import swal from "sweetalert";
import moment from "moment";
import "moment/locale/vi";
import { GlobalState } from "../../Contexts/GlobalState";
import { GetAllBillInitiate } from "../../redux/Action/ActionInfoAllUser";
import { API_URL } from "../../utils/Config";
const Bills = () => {
  const { bill } = useSelector((state) => state.info);
  const { token } = useSelector((state) => state.authAdmin);
  const state = useContext(GlobalState);
  const [callback, setCallback] = state.callback;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const img =
    "https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg";

  useEffect(() => {
    setCallback(true);
    dispatch(GetAllBillInitiate(token.accessToken));
  }, [callback]);
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
          axios.delete(`${API_URL}/bill/delete/${id}`, {
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
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "hoten",
      headerName: "User Order",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img
              className="productListImg"
              src={params.row.url || img}
              alt=""
            />
            {params.row.hoten}
          </div>
        );
      },
    },

    { field: "tong_sl", headerName: "Quantify", width: 150 },
    { field: "tong_hd", headerName: "Total Bill", width: 150 },
    {
      field: "ngaydathang",
      headerName: "Date order",
      width: 160,
      renderCell: (params) => {
        console.log(params);
        return (
          <div className="userListUser">
            {moment(`${params.row.ngaydathang}`).format("Do MMM YYYY")}
          </div>
        );
      },
    },
    { field: "tinhtrangHD", headerName: "Status", width: 150 },
    { field: "diachi", headerName: "Address", width: 400 },
    { field: "ten_hinhthuc", headerName: "Payment", width: 150 },

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
            <Link to={"/bill/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <>
      <ProductStyle />
      <div className="productList">
        <DataGrid
          getRowId={(r) => r.id}
          rows={bill}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default Bills;
