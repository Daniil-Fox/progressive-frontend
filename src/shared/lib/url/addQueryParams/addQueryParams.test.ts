import {getQueryParams} from "./addQueryParams";

describe('addQueryParams', () => {
    test('test with one params', () => {
        const params = {
            test: 'value'
        }

        expect(getQueryParams(params)).toBe('?test=value')
    })
    test('test with multiple params', () => {
        const params = {
            test: 'value',
            second: 'sec'
        }

        expect(getQueryParams(params)).toBe('?test=value&second=sec')
    })
    test('test with undefiend param', () => {
        const params = {
            test: 'value',
            second: undefined
        }

        expect(getQueryParams(params)).toBe('?test=value')
    })
});