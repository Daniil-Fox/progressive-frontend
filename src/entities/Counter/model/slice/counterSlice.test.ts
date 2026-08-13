import {counterReducer, CounterSchema} from "entities/Counter";
import {counterActions} from "entities/Counter/model/slice/counterSlice";
import {StateSchema} from "app/providers/StoreProvider/config/stateSchema";

describe('counterSlice.test', () => {
    test('test increment', () => {
        const state: CounterSchema = {
            value: 10
        }
        expect(counterReducer(state, counterActions.increment())).toEqual({value: 11});
    })
    test('test decrement', () => {
        const state: CounterSchema = {
            value: 10
        }
        expect(counterReducer(state, counterActions.decrement())).toEqual({value: 9});
    })
})