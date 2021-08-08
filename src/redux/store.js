import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./pfonebook/reducer/rootReducer";

const store = configureStore({
  reducer: { contacts: rootReducer },
  // devTools: process.env.NODE_ENV !== "production",
});

export default store;
