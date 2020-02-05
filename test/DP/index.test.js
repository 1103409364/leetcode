// const sum = require('../src/sum');
import { uniquePathsWithObstacles, findCheapestPrice } from '../../src/DP';

test('uniquePathsWithObstacles', () => {
  expect(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]])).toBe(2);
});

test('findCheapestPrice', () => {
  expect(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1)).toBe(200);
  expect(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 0)).toBe(500);
});
