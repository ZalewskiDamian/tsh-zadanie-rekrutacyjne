import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filtersReducer";
import productsReducer from "./productsReducer";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    products: productsReducer,
  },
});
