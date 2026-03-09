// Store for Redux structures

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

// store
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
