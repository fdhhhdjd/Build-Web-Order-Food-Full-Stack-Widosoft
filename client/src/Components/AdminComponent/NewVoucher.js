import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { GlobalState } from "../../Contexts/GlobalState";
import { NewProductStyle } from "../../Styles/StylePages/Admin/NewProduct";
import { API_URL } from "../../utils/Config";
const initialState = {
  id: "",
  ten_phieu: "",
  giatri: "",
  mota: "",
};
const NewVoucher = () => {
  const state = useContext(GlobalState);
  const { voucher } = useSelector((state) => ({ ...state.products }));
  const { token } = useSelector((state) => state.authAdmin);
  const [onEdit, setOnEdit] = useState(false);
  const [products, setProducts] = useState(initialState);
  const [callback, setCallback] = state.callback;
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      setOnEdit(true);
      voucher.forEach((product) => {
        if (product.id == id) {
          setProducts(product);
        }
      });
    } else {
      setOnEdit(false);
      setProducts(initialState);
    }
  }, [id, voucher]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProducts({ ...products, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (onEdit) {
        await axios.patch(
          `${API_URL}/voucher/update/${products.id}`,
          { ...products },
          {
            headers: {
              Authorization: `Bearer ${token.accessToken}`,
            },
          }
        );
        swal("Edit Voucher successfully 🤩", {
          icon: "success",
        });
      } else {
        await axios.post(
          `${API_URL}/voucher/add`,
          { ...products },
          {
            headers: {
              Authorization: `Bearer ${token.accessToken}`,
            },
          }
        );
        swal("Add Voucher successfully 🤩", {
          icon: "success",
        });
      }

      setCallback(!callback);
      navigate("/voucher");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  return (
    <>
      <NewProductStyle />
      <div className="newProduct">
        <div className="create_product">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <label htmlFor="product_id">Mã Phiếu</label>
              <input
                type="text"
                name="id"
                id="id"
                required
                value={products.id}
                onChange={handleChangeInput}
              />
              <label htmlFor="product_id">Tên Phiếu</label>
              <input
                type="text"
                name="ten_phieu"
                id="ten_phieu"
                required
                value={products.ten_phieu}
                onChange={handleChangeInput}
              />
              <label htmlFor="product_id">Gia Trị</label>
              <input
                type="number"
                name="giatri"
                id="giatri"
                required
                value={products.giatri}
                onChange={handleChangeInput}
              />
              <label htmlFor="product_id">Mô tả</label>
              <input
                type="text"
                name="mota"
                id="mota"
                required
                value={products.mota}
                onChange={handleChangeInput}
              />
            </div>

            <button type="submit">{onEdit ? "Update" : "Create"}</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewVoucher;
