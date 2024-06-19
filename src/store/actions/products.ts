import { createAction } from "@reduxjs/toolkit";

const captureText = createAction("captureText", (obj) => {
  return {
    payload: {
      text: obj.text,
    },
  };
});

const productsActions = { captureText };

export default productsActions;
