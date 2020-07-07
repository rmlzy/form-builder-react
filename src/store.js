import { configureStore } from "@reduxjs/toolkit";
import Generator from "./Generator/helper/redux";

export default configureStore({
  reducer: { Generator },
});
