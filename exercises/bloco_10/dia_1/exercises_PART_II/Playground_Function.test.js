const { decode, encode } = require('./Playground_Functions');

describe('Encode function tests', () => {
    it('is accepted Uppercase, but the return is in LowerCase' , () => {
        expect(encode('HELLO WORLD')).toBe('h2ll4 w4rld')
    })

    it('is enconding correctly', () => {
        expect(encode('hello world')).toBe('h2ll4 w4rld')
    })
})

describe('Decode function tests', () => {
    it('is decoding correctly', () => {
        expect(decode('h2ll4')).toBe('hello');
        expect(decode('h2ll4 w4rld')).toBe('hello world')
    })
})