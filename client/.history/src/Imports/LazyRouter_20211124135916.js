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
