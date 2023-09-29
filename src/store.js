import {configureStore} from "@reduxjs/toolkit";
import tabs from "../../IDE/src/features/tabs";
import preview from "./features/preview";

export const store = configureStore({
    reducer: {
        tabs,
        preview
    }
})