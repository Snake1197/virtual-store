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

const getQuantityProduct = createAction("getQuantityProduct");

const updateCart = createAction("updateCart", (products) => ({
  payload: { products },
}));

const removeFromCart = createAction("removeFromCart", (productId: string) => ({
  payload: productId,
}));

const productsActions = {
  captureText,
  calculateTotal,
  getQuantityProduct,
  updateCart,
  removeFromCart,
};

export default productsActions;
