export const bubbleSort = arr => {
  for (let i = 0, len = arr.length; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
// 选择排序
export const selSort = arr => {
  for (let i = 0, minIndex = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};

/**
 * 最大间距
 * @param {number[]} nums
 * @return {number}
 */
export const maximumGap = (nums) => {
  if (nums.length < 2) {
    return 0;
  }

  nums.sort((a, b) => a - b);
  let max = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] > max) {
      max = nums[i + 1] - nums[i];
    }
  }

  return max;
};
// 解法二：插值计算过程放在排序中做，减少一次遍历。
// 用冒泡效率不如原生的 sort。在v8引擎中，对sort方法提供了2种排序算法：插入排序及快排序。
export const maximumGap1 = (arr) => {
  if (arr.length < 2) {
    return 0;
  }
  if (arr.length === 2) {
    return arr[1] - arr[0];
  }
  let max = 0;
  for (let i = 0, len = arr.length; i < len - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (i >= 1) {
      if (arr[len - i] - arr[len - i - 1] > max) {
        max = arr[len - i] - arr[len - i - 1];
      }
    }
  }
  return max;
};

/**
 * 按奇偶排序数组
 * @param {number[]} arr
 * @return {number[]}
 */
export const sortArrayByParityII = (arr) => {
  // 控制升序降序，默认升序
  arr.sort();
  // 存结果
  let r = [];
  let odd = 1;
  let even = 0;

  arr.forEach(item => {
    if (item % 2 === 1) {
      r[odd] = item;
      odd += 2;
    } else {
      r[even] = item;
      even += 2;
    }
  });

  return r;
};

/**
 * 数组中的第K个最大元素
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const findKthLargest = (nums, k) => {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};
// 解法 2
// 不需要全部排序，冒泡排一次找到一个最大值，遍历 k 次即可
export const findKthLargest1 = (arr, k) => {
  let len = arr.length;
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr[len - k];
};
/**
 * 缺失的第一个正数
 * @param {number[]} nums
 * @return {number}
 */
export const firstMissingPositive = (nums) => {
  // 去除小于 0 的数
  nums = nums.filter(item => item > 0);
  // 补 0
  nums.unshift(0);
  // 排序 不用全部排，从小到大排到连续数字断开的位置
  nums.sort((a, b) => a - b);
  // 去重
  nums = Array.from(new Set(nums));
  // console.log(nums);

  let minIndex = 0;
  let len = nums.length;
  // 将索引和值一一对应，索引和值不等的时候就是要求的值
  for (let i = 0; i < len; i++) {
    if (nums[i] !== i) {
      minIndex = i;
      break;
    }
  }

  if (minIndex === 0) {
    minIndex = len;
  }
  // console.log(minIndex);
  return minIndex;
};
// 解法 2
// 以 nums 元素的值为索引，将值放入一个临时数组，让值 = 索引
export const firstMissingPositive1 = (nums) => {
  // 去除小于 0 的数
  // nums = nums.filter(item => item > 0);
  let numslen = nums.length;
  if (numslen === 0) return 1;
  let tmp = [];
  for (let i = 0; i < numslen; i++) {
    if (nums[i] > 0) {
      tmp[nums[i]] = nums[i];
    }
  }

  // console.log(tmp);
  let len = tmp.length;
  if (len === 0) return 1;
  for (let i = 1; i < len; i++) {
    if (tmp[i] !== i) {
      // 连续的数字断开，直接返回
      return i;
    }
  }
  // 连续数字无断开，直接返回 len
  return len;
};