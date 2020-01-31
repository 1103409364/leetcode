/**
 * 棒球比赛
 * @param {string[]} ops
 * @return {number}
 */
export const calPoints = (ops) => {
  let result = [];
  // 上轮
  let pre1;
  // 上上轮
  let pre2;
  // 遍历，处理得分
  ops.forEach(item => {
    switch (item) {
      case 'C':
        if (result.length) {
          result.pop();
        }
        break;
      case 'D':
        pre1 = result.pop();
        result.push(pre1, pre1 * 2);
        break;
      case '+':
        pre1 = result.pop();
        pre2 = result.pop();
        result.push(pre2, pre1, pre2 + pre1);
        break;

      default:
        result.push(item * 1);
        break;
    }
  });

  return result.reduce((total, curnum) => total + curnum);
};

/**
 * 最大矩形
 * @param {character[][]} matrix
 * @return {number}
 */
export const maximalRectangle = (matrix) => {
  let result = [];
  let reg = /1{2,}/g; //至少两个 1
  // 把二维数组中，子数组连续 1 的位置提取出来（起始点 截止点）
  matrix = matrix.map(item => {
    let str = item.join('');
    let execRes = reg.exec(str);
    // 每次执行的结果
    let tmpRes = [];
    // exec 只会匹配一次，用 while 循环让它匹配到最后
    while (execRes) {
      // index 匹配到的字符位于 原始字符串 的基于0的索引值
      tmpRes.push([execRes.index, execRes.index + execRes[0].length - 1]);
      execRes = reg.exec(str);
    }
    return tmpRes;
  });
  // console.log(matrix);

  // 递归计算相邻的矩阵，n 记录行数
  let maxRect = (arr, result, n = 1) => {
    // 弹出第一行
    let top = arr.pop();
    // 弹出第二行
    let next = arr.pop();
    // 记录第一行的起始点和截止点,例如 [1，5]
    let tt;
    // 记录第二行的起始点和截止点,例如 [2，3]
    let nn;
    // 记录两行之间大的起始点
    let start;
    // 记录两行之间小的截止点
    let end;
    let width = 1;
    let maxWidth = 1;
    n++;
    for (let i = 0; i < top.length; i++) {
      tt = top[i];
      for (let j = 0; j < next.length; j++) {
        nn = next[j];
        // 1 终止点，0 起始点。取终止点的最小值，起始点的最大值（交集）
        width = Math.min(tt[1], nn[1]) - Math.max(tt[0], nn[0]);
        if (width > maxWidth) {
          maxWidth = width;
          start = Math.max(tt[0], nn[0]);
          end = Math.min(tt[1], nn[1]);
        }
      }
    }
    // 判断是否找到交集
    if (start === undefined || end === undefined) {
      // n === 2 的时候才弹出两行
      if (n < 3) {
        return false;
      } else {
        // 和下一行没有交集，取上一行记录的值
        width = top[0][1] - top[0][0] + 1; //索引从 0 开始要 +1
        if (width > 1) {
          // 算面积，把 1 看成点，两行之间才有一个单位的宽度，所以 -1
          result.push((n - 1) * width);
        }
      }
    } else {
      arr.push([[start, end]]);
      maxRect(arr, result, n++);
    }
  };
  // 每一行执行一遍
  while (matrix.length > 1) {
    maxRect([].concat(matrix), result);
    matrix.pop();
  }

  let max = 0;
  let item = result.pop();
  while (item) {
    if (item > max) {
      max = item;
    }
    item = result.pop();
  }

  // console.log(max);
  return max > 0 ? max : -1;
};
// maximalRectangle([['1', '0', '1', '0', '0'], ['1', '0', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '0', '0', '1', '0']]);