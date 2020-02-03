import { spiralOrder, rotate } from '../../src/Matrix';

test('spiralOrder', () => {
  expect(spiralOrder([
    [1, 2, 3],
    [10, 11, 4],
    [9, 12, 5],
    [8, 7, 6]
  ])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
});

test('rotate', () => {
  expect(rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])).toEqual([
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
  ]);
});