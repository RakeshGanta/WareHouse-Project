import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    city: "",
    space: "",
    cluster: ""
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilterData: (state, action) => {
            state.search = action.payload.search;
            state.city = action.payload.city;
            state.space = action.payload.space;
            state.cluster = action.payload.cluster;
        }
    }
})

export const { setFilterData } = filterSlice.actions;

export const selectFilters = (state) => state.filter;

export default filterSlice.reducer;