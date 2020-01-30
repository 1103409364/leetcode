/**
 * @param {string} digits
 * @return {string[]}
 */
export const letterCombinations = (digits) => {
  // 建立电话号码键盘映射
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  // 把输入字符串按单字分隔变成数组，输入234=>[2,3,4]
  let num = digits.split('');
  // 映射后的字母，23=> code ['abc','def']
  let code = [];
  num.forEach((item) => {
    if (map[parseInt(item)]) {
      code.push(map[item]);
    }
  });

  let comb = arr => {
    let tmp = [];
    if (arr.length === 0) return arr;
    if (arr.length === 1) return arr[0].split('');

    for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr[1].length; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`);
      }
    }
    arr.splice(0, 2, tmp);
    if (arr.length > 1) {
      comb(arr);
    }
    // else {
    //   return tmp;
    // }

    return arr[0];
  };

  return comb(code);
};