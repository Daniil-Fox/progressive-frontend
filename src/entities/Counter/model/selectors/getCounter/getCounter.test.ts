import {getCounter} from "entities/Counter/model/selectors/getCounter/getCounter";

describe('getCounter', () => {
    test('should return the correct value', () => {
        const state = {
            counter: {
                value: 10
            }
        }
        expect(getCounter(state)).toEqual({value: 10})
    })
})
