import axios from 'axios'
import {loginByUsername} from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import {userActions} from "entities/User";
import {TestAsyncThunk} from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";

describe('AuthByUsername', () => {

    test('success', async () => {
        const userValue =  {username: '123', id: '1'}
        const thunk = new TestAsyncThunk(loginByUsername)
        thunk.api.post.mockResolvedValue({data: userValue})

        const result = await thunk.callThunk({username: '123', password: '123'})

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(loginByUsername)
        thunk.api.post.mockRejectedValue({status: 403})
        const result = await thunk.callThunk({username: '123', password: '123'})

        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
    })
})