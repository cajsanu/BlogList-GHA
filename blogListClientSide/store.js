import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./src/reducers/blogReducer.js";
import notificationReducer from "./src/reducers/notificationReducer.js";
import userReducer from "./src/reducers/userReducer.js";

const combinedStore = configureStore({
  reducer: {
    blogs: blogReducer,
    notification: notificationReducer,
    user: userReducer,
  },
});

export default combinedStore;
