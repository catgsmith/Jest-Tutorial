const isAnagram = require('./anagram');
//
// % npm test anagram.test
// Jest Crash Course - Unit Testing in JavaScript Tutorial @ 45:00,  https://www.youtube.com/watch?v=7r4xVDI2vho

it('isAnagram function exists', () => {
  expect(typeof isAnagram).toEqual('function');
});

it('"cinema" is an anagram of "iceman"', () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

// ignore case and special characters
it('"Dormitory" is an anagram of "dirty room##"', () => {
  expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

it('"Hello" is NOT an anagram of "Aloha"', () => {
  expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
});