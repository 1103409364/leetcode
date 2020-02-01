/**
 * 复原IP地址
 * @param {string} s
 * @return {string[]}
 */
// 暴力解法
export const restoreIpAddresses1 = (s) => {
  let ret = [];
  for (let a = 1; a < 4; ++a)
    for (let b = 1; b < 4; ++b)
      for (let c = 1; c < 4; ++c)
        for (let d = 1; d < 4; ++d) {
          if (a + b + c + d == s.length) {
            let n1 = parseInt(s.substring(0, a));
            let n2 = parseInt(s.substring(a, a + b));
            let n3 = parseInt(s.substring(a + b, a + b + c));
            let n4 = parseInt(s.substring(a + b + c));
            if (n1 <= 255 && n2 <= 255 && n3 <= 255 && n4 <= 255) {
              // console.log(`${n1}.${n2}.${n3}.${n4}`);
              let ip = `${n1}.${n2}.${n3}.${n4}`;
              // 输入输出长度相同
              if (ip.length - 3 == s.length) {
                ret.push(ip);
              }
            }
          }
        }
  return ret;
};
// 递归解法
// DFS的思路，去掉不符合的情况，每次从字符串开始位置截掉长度为 1，2，3之后剩下的子串，用于递归。
// 注意 0开头，
export const restoreIpAddresses2 = (s) => {
  let result = [];
  function helper(s, last, segments) {
    if (segments == 3) {
      if (s.length <= 3 && parseInt(s.slice(0, 3)) <= 255) {
        if (s.length >= 2 && s.charAt(0) == '0') {
          return;
        }
        let item = last.concat(s);
        result.push(item);
        return;
      }
    }
    if (segments < 3) {
      let item = last.concat(s.slice(0, 1)).concat('.');
      helper(s.slice(1), item, segments + 1);
      if (s.charAt(0) != '0') {
        item = last.concat(s.slice(0, 2)).concat('.');
        helper(s.slice(2), item, segments + 1);
        if (parseInt(s.slice(0, 3)) <= 255) {
          item = last.concat(s.slice(0, 3)).concat('.');
          helper(s.slice(3), item, segments + 1);
        }
      }
    }
  }
  helper(s, '', 0);
  return result;
};