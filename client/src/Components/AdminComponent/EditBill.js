import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { GlobalState } from "../../Contexts/GlobalState";
import { NewProductStyle } from "../../Styles/StylePages/Admin/NewProduct";
import { API_URL } from "../../utils/Config";
const initialState = {
  tinhtrangHD: "",
};
const EditBill = () => {
  const [images, setImages] = useState(false);
  const state = useContext(GlobalState);
  const { bill } = useSelector((state) => ({ ...state.info }));
  const { token } = useSelector((state) => state.authAdmin);
  const [onEdit, setOnEdit] = useState(false);
  const [products, setProducts] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [loadingForm, setLoadingForm] = useState(false);
  const [callback, setCallback] = state.callback;
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      setOnEdit(true);
      bill.forEach((product) => {
        if (product.id == id) {
          setProducts(product);
          console.log(product);
          if (product.url === "") {
            setImages(product.url);
          } else {
            setImages(product);
          }
        }
      });
    } else {
      setOnEdit(false);
      setProducts(initialState);
      setImages(false);
    }
  }, [id, bill]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProducts({ ...products, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(
      `${API_URL}/bill/update/${products.id}`,
      { ...products },
      {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      }
    );
    swal("Edit product successfully 🤩", {
      icon: "success",
    });

    setCallback(!callback);
    navigate("/bill");
  };

  return (
    <>
      <NewProductStyle />
      <div className="newProduct">
        <div className="create_product">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <label htmlFor="product_id"> Edit Bill</label>
              <div className="row">
                <label htmlFor="title">Status</label> &nbsp;
                <select
                  name="tinhtrangHD"
                  value={products.tinhtrangHD}
                  onChange={handleChangeInput}
                >
                  <option value="">Please select a category</option>
                  <option value="Đã thanh toán">Đã Thanh Toán</option>
                  <option value="Chưa thanh toán">Chưa Thanh Toán</option>
                  <option value="Hủy">Hủy Đơn Hàng</option>
                  <option value="Đã nhận hàng">Đã Nhận Hàng</option>
                </select>
              </div>
            </div>

            <button type="submit">Update </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditBill;
