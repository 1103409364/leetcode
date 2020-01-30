// const sum = require('../src/sum');
import { reverseWords, countBinarySubstrings } from '../../src/String';

test('reverseWords: "Let\'s take LeetCode contest"', () => {
  expect(reverseWords('Let\'s take LeetCode contest')).toBe('s\'teL ekat edoCteeL tsetnoc');
});

test('countBinarySubstrings: 输入"00100"，预期结果 2', () => {
  expect(countBinarySubstrings('00100')).toBe(2);
});