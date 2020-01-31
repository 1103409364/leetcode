import { repeatedSubstringPattern, isMatch } from '../../src/RegExp';

test('repeatedSubstringPattern: "abab"', () => {
  expect(repeatedSubstringPattern('abab')).toBe(true);
});
test('repeatedSubstringPattern: "ababc"', () => {
  expect(repeatedSubstringPattern('ababc')).toBe(false);
});

test('isMatch("aa", "a")', () => {
  expect(isMatch('aa', 'a')).toBe(false);
});