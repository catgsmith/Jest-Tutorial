const sum = require('./sum');

it('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

it('adds 1 + 2 to NOT equal 4', () => {
  expect(sum(1, 2)).not.toBe(4);
});