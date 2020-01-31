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
    return arr[0];
  };

  return comb(code);
};

/**
 * @param {number[]} deck 一副牌
 * @return {boolean}
 */
export const hasGroupsSizeX = (deck) => {
  deck.sort((a, b) => a - b);
  let min = Number.MAX_SAFE_INTEGER;
  // 保存所有相同数字的分组，
  let dst = [];
  for (let i = 0, len = deck.length, tmp = []; i < len; i++) {
    tmp.push(deck[i]);

    for (let j = i + 1; j <= len; j++) {

      if (deck[i] === deck[j]) {
        tmp.push(deck[j]);

      } else {
        if (min > tmp.length) {
          min = tmp.length;
        }
        dst.push(tmp.length); // 储存每个分组的长度
        tmp.length = 0;
        i = j - 1; // i应该应该从j开始，但本次循环结束 i++，应该-1，i+1 = j
        break;
      }
    }
  }

  if (min < 2) return false;
  // dst 的最大公约数
  function gcd(a, b) {
    if (a % b === 0) {
      return b;
    }
    return gcd(b, a % b);
  }

  // forEach 无法跳出循环
  dst.forEach(item => {
    min = gcd(min, item);
  });

  return min > 1;
};

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
export const canPlaceFlowers = (flowerbed, n) => {
  // 考虑头尾连续0的情况，头尾补 0
  flowerbed.push(0);
  flowerbed.unshift(0);
  let zeroArr = [];
  for (let i = 0, len = flowerbed.length, tmp = []; i <= len; i++) {
    if (flowerbed[i] === 0) {
      tmp.push(0);
    } else {
      tmp.length >= 3 && zeroArr.push(tmp.length);
      tmp.length = 0;
    }
  }
  // 计算 n 个 0，能替换几个 1，头尾 0 不能替换
  function count(arr) {
    let sum = 0;
    arr.forEach(item => {
      sum += Math.round((item - 2) / 2);
    });
    return sum;
  }

  // console.log(count(zeroArr));
  return n <= count(zeroArr);
};
// 解法 2
export const canPlaceFlowers2 = (flowerbed, n) => {
  // 考虑头尾连续0的情况，头尾补 0，规避边界问题
  flowerbed.push(0);
  flowerbed.unshift(0);
  let max = 0;
  for (let i = 1, len = flowerbed.length - 1; i < len; i++) {
    if (flowerbed[i] === 0) {
      if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
        max++;
        i++; //结合 for 循环中的 i++ 会跳过两个
      }
    }
  }
  // console.log(max);
  return max >= n;
};

/**
 * @param {number} n
 * @return {number[]}
 */
export const grayCode = (n) => {
  // 递归函数，用来算输入为n的格雷编码序列
  let make = (n) => {
    if (n === 0) {
      return ['0'];
    }
    if (n === 1) {
      return ['0', '1'];
    } else {
      let pre = make(n - 1);
      let result = [];
      // 最大 index
      let max = Math.pow(2, n) - 1;
      for (let i = 0, len = pre.length; i < len; i++) {
        result[i] = `0${pre[i]}`;
        result[max - i] = `1${pre[i]}`;
      }
      return result;
    }
  };
  // 转为十进制
  let gray = make(n).map(item => {
    return parseInt(item, 2);
  });
  // console.log(gray);

  return gray;
};