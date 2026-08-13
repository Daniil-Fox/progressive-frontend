

import {TestAsyncThunk} from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";
import {Country} from "entities/Country/model/types/country";
import {Currency} from "entities/Currency/model/types/CurrencySchema";
import {updateProfileData} from "./updateProfileData";
import {ValidateProfileError} from "entities/Profile";

const data = {
    first: 'Daniil',
    lastname: "Artyushenko",
    age: 23,
    country: Country.Russia,
    currency: Currency.RUB,
    city: "Moscow",
    username: "fox0nes"
}

describe('Update Profile Data', () => {

    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        })
        thunk.api.put.mockResolvedValue({data})

        const result = await thunk.callThunk()
        expect(thunk.api.put).toHaveBeenCalledTimes(1)
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        })
        thunk.api.put.mockResolvedValue({status: 403})

        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])

    })


    test('validates error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: {...data, lastname: '', age: 0}
            }
        })
        thunk.api.put.mockResolvedValue({data})

        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_AGE])

    })
})