import { createSlice } from '@reduxjs/toolkit'
import {CounterSchema} from "entities/Counter";

const initialState: CounterSchema = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
    },
    selectors: {
        getCounterValue: state => state.value,
        getCounter: state => state
    }
})

export const { actions: counterActions } = counterSlice
export const { reducer: counterReducer } = counterSlice
export const {selectors: counterSelectors} = counterSlice
