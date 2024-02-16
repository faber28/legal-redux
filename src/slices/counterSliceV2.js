import { createAppSlice } from "../app/createAppSlice";
import { fetchCount } from "./counterApi";

const initialState = {
    value: 0
};

export const counterSliceV2 = createAppSlice({
    name: "counterV2",
    initialState,
    reducers: create => ({
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        incrementAsync: create.asyncThunk(
            async (amount) => {
                try {
                    const response = await fetchCount(amount)
                    return response.data
                } catch (error) {
                    console.error(error);
                }
            },
            {
                pending: state => {
                    state.status = "loading"
                },
                fulfilled: (state, action) => {
                    state.status = "fulfilled"
                    state.value += action.payload
                },
                rejected: state => {
                    state.status = "failed"
                },
            },
        ),
    }),
    selectors: {
        counterValueV2: state => state.value
    }
});

export const { incrementAsync, increment, decrement } = counterSliceV2.actions;