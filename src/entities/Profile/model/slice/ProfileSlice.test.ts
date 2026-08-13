import {profileActions, profileReducer, profileSelectors} from "./ProfileSlice";
import {ProfileSchema, ValidateProfileError} from "./../types/profile";
import {updateProfileData} from './../services/updateProfileData/updateProfileData'
import {RootState} from "app/providers/StoreProvider/config/store";
import {DeepPartial} from "shared/types/DeepPartial";
import {Country} from "entities/Country/model/types/country";
import {Currency} from "entities/Currency/model/types/CurrencySchema";

describe("ProfileSlice", () => {
    describe("Selectors", () => {
        const data = {
            first: 'Daniil',
            lastname: "Artyushenko",
            age: 23,
            country: Country.Russia,
            currency: Currency.RUB,
            city: "Moscow",
            username: "fox0nes"
        }
        test('getProfileData', () => {
            const state: DeepPartial<RootState> = {
                profile: {
                    data: data
                }
            }
            expect(profileSelectors.getProfileData(state as RootState)).toEqual(data)
        })
        test('getProfileForm', () => {
            const state: DeepPartial<RootState> = {
                profile: {
                    form: data
                }
            }
            expect(profileSelectors.getProfileForm(state as RootState)).toEqual(data)
        })
        test('getProfileIsLoading', () => {
            const state: DeepPartial<RootState> = {
                profile: {
                    isLoading: true
                }
            }
            expect(profileSelectors.getProfileIsLoading(state as RootState)).toEqual(true)
        })
        test('getProfileError', () => {
            const state: DeepPartial<RootState> = {
                profile: {
                    error: 'some error'
                }
            }
            expect(profileSelectors.getProfileError(state as RootState)).toEqual('some error')
        })
        test('getProfileValidateErrors', () => {
            const state: DeepPartial<RootState> = {
                profile: {
                    validateError: [ValidateProfileError.SERVER_ERROR, ValidateProfileError.NO_DATA]
                }
            }
            expect(profileSelectors.getValidateError(state as RootState)).toEqual([ValidateProfileError.SERVER_ERROR, ValidateProfileError.NO_DATA])
        })
    })


    describe('reducers profile', () => {
        const data = {
            first: 'Daniil',
            lastname: "Artyushenko",
            age: 23,
            country: Country.Russia,
            currency: Currency.RUB,
            city: "Moscow",
            username: "fox0nes"
        }

        test('set readonly', () => {
            const state: DeepPartial<ProfileSchema> = {
                readonly: false
            }

            expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({readonly: true})
        })

        test('cancel Edit', () => {
            const state: DeepPartial<ProfileSchema> = {
                data,
                readonly: false,
                form: {...data, lastname: ''},
                validateError: [ValidateProfileError.SERVER_ERROR, ValidateProfileError.NO_DATA]
            }

            expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({readonly: true, data, form: data, validateError: undefined})
        })

        test('Update Profile', () => {
            const state: DeepPartial<ProfileSchema> = {
                form: data
            }

            expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({lastname: 'Chishkova'}))).toEqual({form: {...data, lastname: 'Chishkova'}})
        })
    })


    describe('Testing service updateProfileData', () => {
        const data = {
            first: 'Daniil',
            lastname: "Artyushenko",
            age: 23,
            city: "Moscow",
            username: "fox0nes"
        }

        test('pending', () => {
            const state: DeepPartial<ProfileSchema> = {
                isLoading: false,
                validateError: [ValidateProfileError.SERVER_ERROR]
            }

            expect(profileReducer(state as ProfileSchema, updateProfileData.pending('requestId', undefined))).toEqual({
                validateError: undefined,
                isLoading: true
            })
        })

        test('fulfilled', () => {
            const state: DeepPartial<ProfileSchema> = {
                isLoading: false,
            }

            expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '', undefined))).toEqual({
                isLoading: false,
                validateError: undefined,
                readonly: true,
                form: data,
                data
            })
        })
    })
})