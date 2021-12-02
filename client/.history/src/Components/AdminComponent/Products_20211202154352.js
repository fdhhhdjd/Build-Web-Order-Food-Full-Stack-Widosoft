import React from "react";

const Products = () => {
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
};

export default Products;
