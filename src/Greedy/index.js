/**
 * 买股票的最佳时机
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = (prices) => {
  // 保存利润
  let count = 0;
  // 上涨状态不卖，下降前卖
  for (let i = 0, len = prices.length; i < len; i++) {
    for (let j = i; j < len - 1; j++) {
      if (prices[j + 1] > prices[j]) {
        count += prices[j + 1] - prices[j];
        i = j;
      } else {
        i = j;
        break; //退出一层循环
      }
    }
  }

  return count;
};

/**
 * 柠檬水找零
 * @param {number[]} bills
 * @return {boolean}
 */
export const lemonadeChange = (bills) => {
  // 收银抽屉
  let hand = [];
  // 判断是否有顾客
  while (bills.length) {
    // 取出前面的顾客付的钱
    let money = bills.shift();
    // 刚好 5 块，直接收钱不用找零
    if (money === 5) {
      hand.push(money);
    } else {
      // 排序已有的零钱，降序排
      hand.sort((a, b) => b - a);
      // 找零金额
      let change = money - 5;
      for (let i = 0; i < hand.length; i++) {
        if (hand[i] <= change) {
          // 开始找零
          change -= hand[i];
          hand.splice(i, 1);
          // 删除元素，数组长度发生变化，要维持 i 保持不变
          i--;
        }
        if (change === 0) {
          break;
        }
      }
      // 找不开了
      if (change !== 0) {
        return false;
      } else {
        // 收钱
        hand.push(money);
      }
    }
  }
  // 处理了所有顾客，没有返回 false 说明都找开了
  return true;
};