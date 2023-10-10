import { configureStore } from "@reduxjs/toolkit";
import userSlice from './Slices/UserSlice';
import TodoSlice from "./Slices/TodoSlice";

const store = configureStore({
    reducer : {
        user : userSlice,
        todo : TodoSlice,
    },
});

export default store;

