import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    active: false,
    promo: false,
    searchTerm: '',
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setActive: (state, action) => {
            state.active = action.payload;
        },
        setPromo: (state, action) => {
            state.promo = action.payload;
        },
        searchProduct: (state, action) => {
            state.searchTerm = action.payload;
        }
    }
});

export const { setActive, setPromo, searchProduct } = filtersSlice.actions

export default filtersSlice.reducer