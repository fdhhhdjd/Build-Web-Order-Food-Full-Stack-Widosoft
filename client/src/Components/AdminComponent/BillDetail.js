import { DataGrid } from "@material-ui/data-grid";
import moment from "moment";
import "moment/locale/vi";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllBillDetailInitiate } from "../../redux/Action/ActionInfoAllUser";
import { ProductStyle } from "../../Styles/StylePages/ProductsAdminStyle";
const BillDetail = () => {
  const { billDetail } = useSelector((state) => state.info);
  const { token } = useSelector((state) => state.authAdmin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllBillDetailInitiate(token.accessToken));
  }, [token]);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "id_hd", headerName: "ID_HD", width: 150 },
    {
      field: "ten_hinhthuc",
      headerName: "Name Payment",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.url} alt="" />
            {params.row.tensp}
          </div>
        );
      },
    },
    { field: "don_gia", headerName: "Unit price (VND)", width: 200 },
    { field: "tong_gia", headerName: "Total (VND)", width: 200 },
    { field: "soluong", headerName: "Quantily", width: 150 },
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
  ];
  return (
    <>
      <ProductStyle />
      <div className="productList">
        <DataGrid
          getRowId={(r) => r.id}
          rows={billDetail}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default BillDetail;
