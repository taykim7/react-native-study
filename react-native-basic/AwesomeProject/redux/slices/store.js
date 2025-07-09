import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})