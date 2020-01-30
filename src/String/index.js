/**
 * @param {string} s
 * @return {string}
 */
// 反转字符串中的单词-iii
export const reverseWords = s => {
  // split 可以使用正侧，空格：/\s/g
  // let result = s.split(/\s/g).map(item => {
  //   return item.split('').reverse().join('')
  // }).join(' ')
  // 单词或者单引号 ‘
  let result = s.match(/[\w']+/g).map(item => {
    return item.split('').reverse().join('');
  }).join(' ');

  // let result = s.split('').reverse().join('').split(' ').reverse().join(' ')

  return result;
};

// 知识点
// String.prototype.split
// String.prototype.match
// Array.prototype.map
// Array.prototype.reverse
// Array.prototype.join

// 计数二进制子串 10101 110011
// 满足要求的字符串（不会存在 0 和 1 混合的情况如：0101 1001）
export const countBinarySubstrings = s => {
  let result = 0,
    pre = 0,
    cur = 1;

  for (let i = 0; i < s.length - 1; ++i) {
    if (s[i] == s[i + 1]) {
      ++cur;
    } else {
      pre = cur;
      cur = 1;
    }

    if (pre >= cur)
      ++result;
  }
  return result;
};