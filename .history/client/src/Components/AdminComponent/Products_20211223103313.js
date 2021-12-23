import React, { useState, useContext } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../utils/dummyData";
import { Link } from "react-router-dom";
import { ProductStyle } from "../../Styles/StylePages/ProductsAdminStyle";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import swal from "sweetalert";
import { toast } from "react-toastify";
import { GlobalState } from "../../Contexts/GlobalState";
const Products = () => {
  const { product, token } = useSelector((state) => state.products);
  const state = useContext(GlobalState);
  const [callback, setCallback] = state.callback;
  const [loading, setLoading] = useState(false);
  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete 🥲!!")) {
        setLoading(true);
        const deleteProduct = axios.delete(`/product/delete/${id}`, {
          headers: { Authorization: `Bearer ${token.accessToken}` },
        });

        await deleteProduct;
        setCallback(!callback);
        swal("delete product successfully 🤩", {
          icon: "success",
        });
        setLoading(false);
      }
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "id_dm", headerName: "Category", width: 160 },
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
    { field: "chitiet", headerName: "Stock", width: 550 },
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
        <DataGrid
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
