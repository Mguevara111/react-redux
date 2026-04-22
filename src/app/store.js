import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./conterslice";

export default configureStore({
    reducer:{
        generalState:tasksReducer
    }
})