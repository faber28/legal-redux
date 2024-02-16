import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counterApi";

const initialState = {
    value: 0
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        }
    },
    selectors: {
        counterValue: state => state.value,
    },
    extraReducers(builder) {
        builder.addCase(fetchCountValue.pending, (state) => {
            state.status = "pending"
        }).addCase(fetchCountValue.fulfilled, (state, action) => {
            state.status = "fulfilled"
            state.value += action.payload
        }).addCase(fetchCountValue.rejected, (state) => {
            state.status = "rejected"
        })
    }
});

export const { increment, decrement } = counterSlice.actions;

export const { counterValue } = counterSlice.selectors;

export const fetchCountValue = createAsyncThunk("counter/fetchCountValue", async (amount, { rejectWithValue }) => {
    try {
        const response = await fetchCount(amount)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response)
    }
})

export default counterSlice.reducer;