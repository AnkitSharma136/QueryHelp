import { configureStore } from "@reduxjs/toolkit";    //common setup for managing state in React applications
import userReducer from "../feature/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});