import {getCounterValue} from "entities/Counter/model/selectors/getCounterValue/getCounterValue";

describe('getCounterValue', () => {
    test('should return the correct value', () => {
        const state = {
            counter: {
                value: 10
            }
        }
        expect(getCounterValue(state)).toEqual(10)
    })
})