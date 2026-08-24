
import {userActions} from "entities/User";
import {TestAsyncThunk} from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";
import {fetchProfileData} from "./fetchProfileData";
import {Country} from "entities/Country/model/types/country";
import {Currency} from "entities/Currency/model/types/CurrencySchema";

const data = {
    first: 'Daniil',
    lastname: "Artyushenko",
    age: 23,
    country: Country.Russia,
    currency: Currency.RUB,
    city: "Moscow",
    username: "fox0nes"
}

describe('Fetch Profile Data', () => {

    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockResolvedValue({data})

        const result = await thunk.callThunk('1')
        expect(thunk.api.get).toHaveBeenCalledTimes(1)
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockResolvedValue({status: 403})
        const result = await thunk.callThunk('1')
        expect(result.meta.requestStatus).toBe('rejected')

    })
})