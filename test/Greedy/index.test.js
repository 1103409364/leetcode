// const sum = require('../src/sum');
import { maxProfit, lemonadeChange } from '../../src/Greedy';

test('maxProfit', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
  expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  expect(maxProfit([0])).toBe(0);
});
test('lemonadeChange', () => {
  expect(lemonadeChange([5, 5, 5, 10, 20])).toBe(true);
  expect(lemonadeChange([5, 5, 10])).toBe(true);
  expect(lemonadeChange([10, 10])).toBe(false);
  expect(lemonadeChange([5, 5, 10, 10, 20])).toBe(false);
});