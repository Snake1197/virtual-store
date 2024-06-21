import { createAction } from "@reduxjs/toolkit";

const captureText = createAction("captureText", (obj) => {
  return {
    payload: {
      text: obj.text,
    },
  };
});

const calculateTotal = createAction("calculateTotal", (obj) => ({
  payload: { products: obj.products },
}));

const getQuantityProduct = createAction("loadProductsFromStorage");

const updateCart = createAction("updateCart", (products) => ({
  payload: { products },
}));

const productsActions = {
  captureText,
  calculateTotal,
  getQuantityProduct,
  updateCart,
};

export default productsActions;
