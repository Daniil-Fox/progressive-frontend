import {DeepPartial} from "shared/types/DeepPartial";
import {StateSchema} from "app/providers/StoreProvider/config/stateSchema";
import {getLoginFormError, loginActions, loginReducer} from "./loginSlice";
import {RootState} from "app/providers/StoreProvider/config/store";
import {LoginSchema} from "features/AuthByUsername";

describe('selectors.test', () => {
    test('should return error', () => {
        const state: DeepPartial<RootState> = {
            login: {
                error: 'error'
            }
        }

        expect(getLoginFormError(state as RootState)).toEqual('error');
    })
})

describe('reducers.test', () => {
    test('setUsername', () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'username'
        }

        expect(loginReducer(state as LoginSchema, loginActions.setUsername('user'))).toEqual({username: 'user'});
    })

    test('setPassword', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123'
        }

        expect(loginReducer(state as LoginSchema, loginActions.setPassword('321'))).toEqual({password: '321'});
    })
})