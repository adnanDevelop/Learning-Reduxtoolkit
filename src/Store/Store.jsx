import { configureStore } from "@reduxjs/toolkit";
import userSlice from './Slices/UserSlice';

const store = configureStore({
    reducer : {
        user : userSlice,
    },
});

export default store;

