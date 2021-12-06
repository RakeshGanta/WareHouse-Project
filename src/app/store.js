import { configureStore } from '@reduxjs/toolkit';
import wareHouseReducer from "../features/wareHouseSlice";
import filterReducer from "../features/filterSlice";

export const store = configureStore({
  reducer: {
    warehouse: wareHouseReducer,
    filter: filterReducer
  },
});
