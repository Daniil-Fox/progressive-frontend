import {StateSchema} from "app/providers/StoreProvider/config/stateSchema";

export const getCounterValue = (state: StateSchema) => state.counter.value;