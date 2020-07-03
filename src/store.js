import { configureStore } from "@reduxjs/toolkit";
import genCode from "./GenCode/helper/redux";

export default configureStore({
  reducer: { genCode },
});
