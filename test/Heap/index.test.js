import { Heap, Heap2, SuperUgly, SuperUgly2 } from '../../src/Heap';

test('Heap', () => {
  let heap = new Heap([1, 10, 9, 5, 3, 11, 0, 4, 2]);
  expect(heap.sort()).toEqual([0, 1, 2, 3, 4, 5, 9, 10, 11]);
});
test('Heap2', () => {
  let heap = new Heap2('chcaa');
  expect(heap.toString()).toMatch(/ccaah|aacch/);
});

test('SuperUgly test1', () => {
  expect(SuperUgly.getPrimes(6)).toEqual([2, 3]);
  expect(SuperUgly.getPrimes(4)).toEqual([2]);
  expect(SuperUgly.getPrimes(180)).toEqual([2, 3, 5]);
});

test('SuperUgly test2', () => {
  let ugly = new SuperUgly(12, [2, 7, 13, 19]);
  expect(ugly.getAll(6)).toEqual(32);
});

test('SuperUgly test3', () => {
  let ugly = new SuperUgly2(12, [2, 7, 13, 19]);
  expect(ugly.getAll(6)).toEqual(32);
});
