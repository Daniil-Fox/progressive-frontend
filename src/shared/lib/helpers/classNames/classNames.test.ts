import {classNames} from "shared/lib/helpers/classNames/classNames";


describe('classNames', () => {
    test('testing without args', () => {
        const result = ""
        const expected = classNames("", {}, [])
        expect(expected).toBe(result)
    })

    test('testing with only arg', () => {
        const result = "class"
        const expected = classNames("class", {}, [])
        expect(expected).toBe(result)
    })

    test('testing with extra classes', () => {
        const result = "class extra"
        const expected = classNames("class", {}, ["extra"])
        expect(expected).toBe(result)
    })

    test('testing with mods', () => {
        const result = "class hovered"
        const expected = classNames("class", {hovered: true})
        expect(expected).toBe(result)
    })

    test('testing with mods and false mods', () => {
        const result = "class extra hovered"
        const expected = classNames("class", {hovered: true, red: false}, ["extra"])
        expect(expected).toBe(result)
    })

    test('testing with mods and false mods', () => {
        const result = "class extra super puper hovered"
        const expected = classNames("class", {hovered: true, red: false}, ["extra", "super", "puper"])
        expect(expected).toBe(result)
    })
})