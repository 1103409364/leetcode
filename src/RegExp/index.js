/**
 * @param {string} s
 * @return {boolean}
 */
export const repeatedSubstringPattern = function (s) {
  // 模式匹配
  return /^(\w+)\1+$/.test(s);
};

// ispatch("aaa", "a*a") 测试 error
export const isMatch = function (str, pattern) {
  // 对模式变量进行正则筛选 匹配所有中间是*，头尾字符相同 或 ([a-z.]\*) 或者 所有后面跟着([a-z.]\*)的[a-z]+部分
  let patternArr = pattern.match(/(([a-z.])\*\2)|([a-z.]\*)|([a-z.]+(?=([a-z.]\*)|$))/g);
  console.log(patternArr);

  let cur = 0;
  let strLen = str.length;

  for (let i = 0, len = patternArr.length; i < len; i++) {
    // 对于模式分为4类，a*a|.*|a*|cdef.
    let p = patternArr[i].split('');
    // console.log(i);
    // if (p.length === 3) {
    //   while (str[cur] === p[0]) {
    //     cur++
    //   }
    // }
    // 如果第二位是*表示是有模式的
    if (p[1] === '*') {
      if (p[0] === '.') {
        cur = strLen;
        continue;
      } else {
        while (str[cur] === p[0]) {
          cur++;
        }
      }
    } else {
      for (let j = 0, jlen = p.length; j < jlen; j++) {
        if (str[cur] === undefined) {
          return false;
        }
        if (p[j] !== str[cur] && p[j] !== '.') {
          return false;
        } else {
          cur++;
        }
      }
    }
  }
  console.log(cur, strLen);

  return cur === strLen;
};
// ispatch("pississippi", "pis*is*ip*.")
// ispatch("ab", ".*c")