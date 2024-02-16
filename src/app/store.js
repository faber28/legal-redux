import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../slices/counterSlice";
import { counterSliceV2 } from "../slices/counterSliceV2";

const rootReducer = combineSlices(counterSlice, counterSliceV2)

export const store = configureStore({
    reducer: rootReducer
});