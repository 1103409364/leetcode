import { isSymmetric, Tree, isValidBST } from '../../src/Tree';

test('isSymmetric', () => {
  let root = new Tree([1, 2, 2, 3, 4, 4, 3]);
  expect(isSymmetric(root)).toBe(true);
});
test('isValidBST', () => {
  let root = new Tree([2, 1, 3]);
  expect(isValidBST(root)).toBe(true);
});