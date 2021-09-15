const chunkArray = require('./chunk');
//
// % npm test chunk.test
// Jest Crash Course - Unit Testing in JavaScript Tutorial @ 38:00,  https://www.youtube.com/watch?v=7r4xVDI2vho

it('chunkArray function exists', () => {
  expect(chunkArray).toBeDefined();
});

it('Chunk an array of 10 values with length of 2', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  const chunkedArr = chunkArray(numbers, len);

  expect(chunkedArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});

it('Chunk an array of 3 values with length of 1', () => {
  const numbers = [1, 2, 3];
  const len = 1;
  const chunkedArr = chunkArray(numbers, len);

  expect(chunkedArr).toEqual([[1], [2], [3]]);
});