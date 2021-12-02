import React, { lazy } from "react";
export const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Pages/Home")), 2000);
  });
});
export const FeedBack = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Pages/FeedBack")), 2000);
  });
});
export const ProductDetails = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Pages/ProductDetails")), 2000);
  });
});
export const Authentication = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Pages/Authentication")), 2000);
  });
});
export const Forget = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("../Components/Authentication/Forget")),
      2000
    );
  });
});
export const Payment = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Pages/Payment")), 2000);
  });
});
export const Checkout = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Pages/Checkout")), 2000);
  });
});
export const Admin = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Pages/Admin")), 2000);
  });
});
