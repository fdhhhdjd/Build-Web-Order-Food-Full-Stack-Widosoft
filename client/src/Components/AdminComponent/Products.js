import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { GlobalState } from "../../Contexts/GlobalState";
import { ProductStyle } from "../../Styles/StylePages/ProductsAdminStyle";
import { API_URL } from "../../utils/Config";

const Products = () => {
  const { product } = useSelector((state) => state.products);
  const { token } = useSelector((state) => state.authAdmin);
  const state = useContext(GlobalState);
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
          axios.delete(`${API_URL}/product/delete/${id}`, {
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
    { field: "tendm", headerName: "Category", width: 160 },
    {
      field: "product",
      headerName: "Product",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.url} alt="" />
            {params.row.tensp}
          </div>
        );
      },
    },
    { field: "chitiet", headerName: "Description", width: 550 },
    {
      field: "size",
      headerName: "Size",
      width: 110,
    },
    {
      field: "gia",
      headerName: "Price (VND)",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
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
        <Link to="/newproduct">
          <button className="userAddButton">Create</button>
        </Link>
        <DataGrid
          getRowId={(r) => r.id}
          rows={product}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default Products;
