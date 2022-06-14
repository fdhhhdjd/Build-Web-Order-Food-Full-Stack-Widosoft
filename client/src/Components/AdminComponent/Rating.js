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
import { GetAllRatingInitiate } from "../../redux/Action/ActionInfoAllUser";
import { API_URL } from "../../utils/Config";
const Rating = () => {
  const { rating } = useSelector((state) => state.info);
  const { token } = useSelector((state) => state.authAdmin);
  const state = useContext(GlobalState);
  const [callback, setCallback] = state.callback;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const img =
    "https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg";

  useEffect(() => {
    setCallback(true);
    dispatch(GetAllRatingInitiate(token.accessToken));
  }, [callback, token]);

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
          axios.delete(`${API_URL}/rating/delete/${id}`, {
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
    { field: "id_hd", headerName: "ID", width: 90 },
    {
      field: "ten_hinhthuc",
      headerName: "Name Payment",
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
    { field: "diem_danhgia", headerName: "Rating Star ⭐", width: 170 },
    {
      field: "binhluan",
      headerName: "Comment User",
      width: 400,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.binhluan}</div>;
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
          rows={rating}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default Rating;
