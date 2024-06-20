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

const productsActions = { captureText, calculateTotal };

export default productsActions;
