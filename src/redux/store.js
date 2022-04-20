import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filtersReducer";

export const store = configureStore({
    reducer: {
        filters: filtersReducer,
    }
})