import {Profile, ValidateProfileError} from "./../../types/profile";
import {validateProfile} from "entities/Profile/model/services/validateProfile/validateProfile";
import {Country} from "entities/Country/model/types/country";
import {Currency} from "entities/Currency/model/types/CurrencySchema";

describe('validateProfile test', () => {
    test('validate with empty profile', () => {
        const profile: (Profile | undefined) = undefined
        const result = validateProfile(profile)

        expect(result).toEqual([ValidateProfileError.NO_DATA])
    })

    test('validate with incorrect lastname', () => {
        const profile: Profile = {
            first: 'Daniil',
            lastname: '',
            age: 20,
            country: Country.Russia,
            currency: Currency.RUB,
            city: 'Moscow',
            avatar: '',
            username: 'Daniil'
        }
        const result = validateProfile(profile)

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    })

    test('validate with incorrect age', () => {
        const profile: Profile = {
            first: 'Daniil',
            lastname: 'Artyushenko',
            age: 0,
            country: Country.Russia,
            currency: Currency.RUB,
            city: 'Moscow',
            avatar: '',
            username: 'Daniil'
        }
        const result = validateProfile(profile)

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
    })
    test('validate with incorrect country', () => {
        const profile: Profile = {
            first: 'Daniil',
            lastname: 'Artyushenko',
            age: 23,
            currency: Currency.RUB,
            city: 'Moscow',
            avatar: '',
            username: 'Daniil'
        }
        const result = validateProfile(profile)

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
    })
    test('validate with all errors', () => {
        const profile: Profile = {
            first: 'Daniil',
            lastname: '',
            age: 0,
            currency: Currency.RUB,
            city: 'Moscow',
            avatar: '',
            username: 'Daniil'
        }
        const result = validateProfile(profile)

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_COUNTRY])
    })
})