import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    active: false,
    promo: false,
    searchTerm: '',
    page: 1,
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setActive: (state) => {
            state.active = !state.active;
        },
        setPromo: (state) => {
            state.promo = !state.promo;
        },
        searchProduct: (state, action) => {
            state.searchTerm = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.page = action.payload;
        }
    }
});

export const { setActive, setPromo, searchProduct, setCurrentPage } = filtersSlice.actions

export default filtersSlice.reducer