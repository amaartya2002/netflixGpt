import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice.js";
import gptReducer from "./gptSlice.js"
import { useReducer } from "react";

const appStore = configureStore ({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        gpt:gptReducer,
        
    },
     
});

export default appStore;