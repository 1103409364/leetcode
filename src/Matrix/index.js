/**
 * 螺旋矩阵
 * @param {number[][]} matrix
 * @return {number[]}
 */
// 思路：右下左上
// j ++
// i ++
// j --
// i --

export const spiralOrder = (matrix) => {
  let result = [];
  // matrix 为 空 []
  if (matrix.length === 0) return result;

  let i = 0;
  let j = 0;
  let ilen = matrix.length;
  let jlen = matrix[0].length;
  let resultLength = ilen * jlen; //结果长度

  let imax = ilen - 1; // i最大索引
  let jmax = jlen - 1; // j最大索引
  let iboundary = Math.round(imax / 2); //i 的边界
  let jboundary = Math.round(jmax / 2); //j 的边界

  /**
     * 
     * @param {*} i 
     * @param {*} j 
     * @param {*} imax //每一轮 i 的最大值
     * @param {*} jmax //每一轮 j 的最大值
     */
  function ergodic(i, j, imax, jmax) {
    // 开始 
    let start = i;
    // 向右
    while (j <= jmax) {
      // console.log(matrix[i][j]);
      result.push(matrix[i][j]);
      j++;
    }
    // 不满足条件退出循环，多加了 1 要减掉，后退一步。到下一个开始点
    j--;
    i++;
    // 向下
    while (i <= imax) {
      // console.log(matrix[i][j]);
      result.push(matrix[i][j]);
      i++;
    }
    i--;
    j--;
    // 向左
    while (j >= start) {
      // console.log(matrix[i][j]);
      result.push(matrix[i][j]);
      j--;
    }
    j++;
    i--;
    // 向上 不能回到起始点
    while (i > start) {
      // console.log(matrix[i][j]);
      result.push(matrix[i][j]);
      i--;
    }
    i++;
    j++;

    if (imax - 1 >= iboundary && jmax - 1 >= jboundary) {
      // console.log(i, j, imax - 1, jmax - 1);
      ergodic(i, j, imax - 1, jmax - 1);
    }
  }

  ergodic(i, j, imax, jmax);
  // i j 的越界修正操作导致最后可能会多走一步
  return result.slice(0, resultLength);
};

// console.log(spiralOrder([
//   [1, 2, 3, 4],
//   [10, 11, 12, 5],
//   [9, 8, 7, 6]]
// ));

// console.log(spiralOrder([
//   [1, 2, 3, 4, 5, 6]
// ]));
// console.log(spiralOrder([
//   [1],
//   [2],
//   [3]
// ]));
// console.log(spiralOrder([
//   []
// ]));
// console.log(spiralOrder([
//   [1, 2, 3],
//   [10, 11, 4],
//   [9, 12, 5],
//   [8, 7, 6]
// ]));
/**
 * @param {number[][]} arr
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
export const rotate = (arr) => {
  // 获取矩阵阶数
  let n = arr.length;
  // 垂直翻转 考虑n的奇偶
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n; j++) {
      [arr[i][j], arr[n - 1 - i][j]] = [arr[n - 1 - i][j], arr[i][j]];
    }
  }
  // 沿对角线反转
  for (let p = 0; p < n - 1; p++) {
    for (let q = p + 1; q < n; q++) {
      [arr[p][q], arr[q][p]] = [arr[q][p], arr[p][q]];
    }
  }
  return arr;
};
