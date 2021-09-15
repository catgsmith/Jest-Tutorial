const reverseString = require('./reversestring');
//
// % npm test reverseString.test
// Jest Crash Course - Unit Testing in JavaScript Tutorial @ 32:00,  https://www.youtube.com/watch?v=7r4xVDI2vho

it('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

it('String reverses', () => {
  expect(reverseString('hello')).toEqual('olleh');
});

it('String reverses with convert to lowercase', () => {
  expect(reverseString('HELLO')).toBe('olleh');
});