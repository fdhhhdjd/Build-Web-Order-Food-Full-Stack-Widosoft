import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import {
  NotFound,
  Loading,
  UserLists,
  Rating,
  ProductsAdmin,
  NewUsers,
  NewProducts,
  ManagerAdmins,
  ChangePasswords,
  UserRoute,
  UserRoutes,
  Categorys,
  AccountAdmins,
  AdminNews,
  AdminNew,
} from "./Imports/Index";
import {
  Home,
  FeedBack,
  ProductDetails,
  Authentication,
  Forget,
  Payment,
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
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <UserRoutes>
                <Authentication />
              </UserRoutes>
            }
          />
          <Route path="/forget" element={<Forget />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/rating" element={<Rating />} />
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
            path="/profileAdmin"
            element={
              <UserRoute>
                <ManagerAdmins />
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
