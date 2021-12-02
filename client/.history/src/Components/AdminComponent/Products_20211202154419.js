import React from "react";

const Products = () => {
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "product",
          headerName: "Product",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="productListItem">
                <img className="productListImg" src={params.row.img} alt="" />
                {params.row.name}
              </div>
            );
          },
        },
        { field: "stock", headerName: "Stock", width: 200 },
        {
          field: "status",
          headerName: "Status",
          width: 120,
        },
        {
          field: "price",
          headerName: "Price",
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
}
        }
export default Products;
