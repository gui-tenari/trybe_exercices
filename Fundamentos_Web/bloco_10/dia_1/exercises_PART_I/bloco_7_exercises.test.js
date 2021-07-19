const {
    sum,
    myRemove,
    myRemoveWithoutCopy,
    myFizzBuzz
    } = require('./bloco_7_exercises.js');



describe('sum function tests', () => {
    it('should return the sum of the values', () => {
        expect(sum(2, 4)).toBe(6);
        expect(sum(5, 4)).toBe(9);
        expect(sum(20, 4)).toBe(24);
    })

    it('should throw an Error', () => {
        expect(() => {
            sum(true, false);
            sum('3', 4);
        }).toThrow;
    })
})

describe('myRemove function tests', () => {
    test('if myRemove remove the correct item from array', () => {
        expect(myRemove([11, 5, 13, 22], 22)).toEqual([11, 5, 13])
    })
})

describe('myRemoveWithoutCopy function tests', () => {
    it('should return the same array without the number on parameter', () => {
        expect(myRemove([1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4])
    })
})

describe('myFizzBuzz function tests', () => {
    test('if return false when parameter is not a number', () => {
        expect(myFizzBuzz('5')).toBeFalsy;
        expect(myFizzBuzz(true)).toBeFalsy;
        expect(myFizzBuzz([2, 3])).toBeFalsy;
    })

    test('if return the right word according to the parameters', () => {
        expect(myFizzBuzz(3)).toBe('fizz');
        expect(myFizzBuzz(5)).toBe('buzz');
        expect(myFizzBuzz(15)).toBe('fizzBuzz');
    })
})