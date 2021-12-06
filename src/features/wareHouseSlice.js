import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    warehouses: []
}

const wareHouseSlice = createSlice({
    name: "warehouse",
    initialState,
    reducers: {
        setWareHouses: (state, action) => {
            state.warehouses = action.payload
        }

    }

})

export const { setWareHouses } = wareHouseSlice.actions;

export const selectWarehouses = (state) => state.warehouse.warehouses;

export default wareHouseSlice.reducer;