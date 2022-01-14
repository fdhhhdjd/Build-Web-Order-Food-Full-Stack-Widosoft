import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import {
  NotFound,
  Loading,
  UserLists,
  Ratings,
  ProductsAdmin,
  NewUsers,
  NewProducts,
  ChangePasswords,
  UserRoute,
  UserRoutes,
  Categorys,
  AccountAdmins,
  AdminNews,
  Payments,
  Bills,
  NewPayments,
  InfoApps,
  EditBills,
  BillDetails,
  Vouchers,
  Infos,
  NewVoucher,
  NewVouchers,
} from "./Imports/Index";
import {
  Home,
  FeedBack,
  ProductDetails,
  Authentication,
  Forget,
  Checkout,
  Admin,
  ProfileAdmin,
} from "./Imports/LazyRouter";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ToastContainer position="top-center" />
        <Routes>
          <Route
            path="/"
            element={
              <UserRoute>
                <Admin />
              </UserRoute>
            }
          />
          <Route
            path="/login"
            element={
              <UserRoutes>
                <Authentication />
              </UserRoutes>
            }
          />
          <Route
            path="/forget"
            element={
              <UserRoutes>
                <Forget />
              </UserRoutes>
            }
          />
          {/* <Route path="/feedback" element={<FeedBack />} /> */}
          {/* <Route path="/product" element={<ProductDetails />} /> */}
          {/* <Route path="/payment" element={<Payment />} /> */}
          {/* <Route path="/checkout" element={<Checkout />} /> */}
          {/* <Route path="/rating" element={<Rating />} /> */}
          <Route
            path="/admin"
            element={
              <UserRoute>
                <Admin />
              </UserRoute>
            }
          />
          <Route
            path="/profileAdmin"
            element={
              <UserRoute>
                <ProfileAdmin />
              </UserRoute>
            }
          />
          <Route
            path="/accountAdmin"
            element={
              <UserRoute>
                <AccountAdmins />
              </UserRoute>
            }
          />
          <Route
            path="/changePassword/:id"
            element={
              <UserRoute>
                <ChangePasswords />
              </UserRoute>
            }
          />
          <Route
            path="/users"
            element={
              <UserRoute>
                <UserLists />
              </UserRoute>
            }
          />
          <Route
            path="/newUser/:id"
            element={
              <UserRoute>
                <NewUsers />
              </UserRoute>
            }
          />

          <Route
            path="/newAdmin/:id"
            element={
              <UserRoute>
                <AdminNews />
              </UserRoute>
            }
          />

          <Route
            path="/products"
            element={
              <UserRoute>
                <ProductsAdmin />
              </UserRoute>
            }
          />
          <Route
            path="/product/:id"
            element={
              <UserRoute>
                <NewProducts />
              </UserRoute>
            }
          />
          <Route
            path="/newproduct"
            element={
              <UserRoute>
                <NewProducts />
              </UserRoute>
            }
          />
          <Route
            path="/Category"
            element={
              <UserRoute>
                <Categorys />
              </UserRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <UserRoute>
                <Payments />
              </UserRoute>
            }
          />
          <Route
            path="/payment/:id"
            element={
              <UserRoute>
                <NewPayments />
              </UserRoute>
            }
          />
          <Route
            path="/newpayment"
            element={
              <UserRoute>
                <NewPayments />
              </UserRoute>
            }
          />
          <Route
            path="/infoapp"
            element={
              <UserRoute>
                <InfoApps />
              </UserRoute>
            }
          />
          <Route
            path="/infoapp/:id"
            element={
              <UserRoute>
                <Infos />
              </UserRoute>
            }
          />
          <Route
            path="/newinfoapp"
            element={
              <UserRoute>
                <Infos />
              </UserRoute>
            }
          />
          <Route
            path="/bill"
            element={
              <UserRoute>
                <Bills />
              </UserRoute>
            }
          />
          <Route
            path="/bill/:id"
            element={
              <UserRoute>
                <EditBills />
              </UserRoute>
            }
          />
          <Route
            path="/rating"
            element={
              <UserRoute>
                <Ratings />
              </UserRoute>
            }
          />
          <Route
            path="/billdetail"
            element={
              <UserRoute>
                <BillDetails />
              </UserRoute>
            }
          />
          <Route
            path="/voucher"
            element={
              <UserRoute>
                <Vouchers />
              </UserRoute>
            }
          />
          <Route
            path="/voucher/:id"
            element={
              <UserRoute>
                <NewVouchers />
              </UserRoute>
            }
          />
          <Route
            path="/newvoucher"
            element={
              <UserRoute>
                <NewVouchers />
              </UserRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
