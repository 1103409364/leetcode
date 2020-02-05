/**
 * 不同路径
 * @param {number[][]} arr
 * @return {number}
 */
// 值为 1 说明有障碍物,
export const uniquePathsWithObstacles = (arr) => {
  let m = arr.length;
  let n = arr[0].length;

  // m 行 n列
  let dp = (m, n) => {
    // 边界 m n 为 2 或者单行 单列
    if (m === 2 && n === 2) {
      // arr[1][1]有障碍物或者arr[1][0] arr[0][1]都有障碍物走不通，0
      // arr[1][0] arr[0][1] 其中一个有障碍物，有一种走法，1
      // 都没有障碍物有两种走法，2
      return (arr[1][1] === 1 || arr[1][0] + arr[0][1] === 2) ? 0 : (arr[1][0] === 1 || arr[0][1] === 1) ? 1 : 2;
    }
    // 单行单列 遍历
    else if (m < 2 || n < 2) {
      if (m < 2) {
        return arr[m - 1].includes(1) ? 0 : 1;
      }
      else {
        for (let i = 0; i < m; i++) {
          if (arr[i][0] === 1) {
            return 0;
          }
        }
        return 1;
      }
    }
    // 非边界情况
    else {
      return dp(m - 1, n) + dp(m, n - 1);
    }
  };

  return dp(m, n);
};
// 优化？加缓存

/**
 * K 站中转内最便宜的航班。同最短路径
 * @param {number} n 个城市
 * @param {number[][]} flights 航班
 * @param {number} src 起点
 * @param {number} dst 终点
 * @param {number} K 最多转K次
 * @return {number}
 */
export const findCheapestPrice = (n, flights, src, dst, K) => {
  let cheap = (src, dst, k) => {
    // 找到 dst 所有的前一站
    let prev = flights.filter(item => item[1] === dst);
    let min = Math.min.apply(null, prev.map(item => {
      // 上一站找到了起始城市。
      if (item[0] === src && k >= 0) {
        return item[2];
      }
      // 次数用完了，最后一站不是要求的起始站
      else if (k === 0 && item[0] !== src) {
        return Number.MAX_SAFE_INTEGER;
      }
      // 不是起始点，同时次数还没用完
      else {
        return item[2] + cheap(src, item[0], k - 1);
      }
    }));
    return min;
  };

  return cheap(src, dst, K) || -1;
};