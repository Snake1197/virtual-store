import { createReducer } from "@reduxjs/toolkit";
import productsActions from "../actions/products";
import Product from "../../interfaces/Product";

const {
  captureText,
  calculateTotal,
  getQuantityProduct,
  updateCart,
  removeFromCart,
} = productsActions;

const loadCartFromLocalStorage = (): Product[] => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState) as Product[];
  } catch (err) {
    console.error("Error loading cart from localStorage", err);
    return [];
  }
};

const initialState = {
  text: "",
  total: 0,
  quantityTotal: 0,
  cart: loadCartFromLocalStorage(),
};
const productsReducer = createReducer(initialState, (build) =>
  build
    .addCase(captureText, (state, action) => {
      const newState = {
        ...state,
        text: action.payload.text,
      };
      return newState;
    })
    .addCase(calculateTotal, (state, action) => {
      const products = action.payload.products;
      const subtotals = products.map(
        (each: Product) => each.price * (each.units ?? 0)
      );
      const total = subtotals.reduce((acc: number, val: number) => acc + val);
      const newState = {
        ...state,
        total,
      };
      return newState;
    })
    .addCase(getQuantityProduct, (state) => {
      const products = JSON.parse(localStorage.getItem("cart") || "[]");
      const quantityTotal = products
        .map((each: Product) => each.units ?? 0)
        .reduce((acc: number, val: number) => acc + val, 0);
      const newState = {
        ...state,
        quantityTotal,
      };
      return newState;
    })
    .addCase(updateCart, (state, action) => {
      const products = action.payload.products;
      state.cart = products;
      state.quantityTotal = products
        .map((each: Product) => each.units ?? 0)
        .reduce((acc: number, val: number) => acc + val, 0);
    })
    .addCase(removeFromCart, (state, action) => {
      const updatedCart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      state.cart = updatedCart;
    })
);

export default productsReducer;
