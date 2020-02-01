import {
  bubbleSort,
  selSort,
  maximumGap,
  maximumGap1,
  sortArrayByParityII,
  findKthLargest,
  findKthLargest1,
  firstMissingPositive,
  firstMissingPositive1,
} from '../../src/Sort';

test('bubbleSort([3, 1, 4, 5, 2, 10])', () => {
  expect(bubbleSort([3, 1, 4, 5, 2, 10])).toEqual([1, 2, 3, 4, 5, 10]);
});
test('selSort([3, 1, 4, 5, 2, 10])', () => {
  expect(selSort([3, 1, 4, 5, 2, 10])).toEqual([1, 2, 3, 4, 5, 10]);
});
test('maximumGap([2])', () => {
  expect(maximumGap([2])).toBe(0);
});
test('maximumGap([3,6,9,1])', () => {
  expect(maximumGap([3, 6, 9, 1])).toBe(3);
});
test('maximumGap1([3,6,9,1])', () => {
  expect(maximumGap1([3, 6, 9, 1])).toBe(3);
});
test('sortArrayByParityII([4,2,5,7])', () => {
  expect(sortArrayByParityII([4, 2, 5, 7])).toEqual([2, 5, 4, 7]);
});
test('findKthLargest([3,2,3,1,2,4,5,5,6],4)', () => {
  expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
});
test('findKthLargest1([3,2,3,1,2,4,5,5,6],2)', () => {
  expect(findKthLargest1([3, 2, 1, 5, 6, 4], 2)).toBe(5);
});
test('firstMissingPositive([0,2,2,1,1])', () => {
  expect(firstMissingPositive([0, 2, 2, 1, 1])).toBe(3);
});
test('firstMissingPositive1([1,2,0])', () => {
  expect(firstMissingPositive1([1, 2, 0])).toBe(3);
});