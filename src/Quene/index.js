/**
 * 设计循环队列
 * 构造器，设置队列长度为 k 。
 * @param {number} k
 */
export class MyCircularQueue {
  constructor(k) {
    // Array 和 new Array 等价
    this.list = new Array(k);
    // 循环队列最多只能有MaxSize-1个队列元素，当循环队列中只剩下一个空存储单元时，队列就已经满了
    this.size = k + 1;
    // 队首指针
    this.front = 0;
    // 队尾指针
    this.rear = 0;
  }

  /**
   *  队列只允许在后端（称为rear）进行插入操作，在前端（称为front）进行删除操作。
   *  向循环队列插入一个元素。如果成功插入则返回真。
   *  插入一个元素，队首指针不变，队尾指针 +1 循环队列考虑边界
   * @param {number} value
   * @return {boolean}
   */
  enQueue(number) {
    if (this.isFull()) return false;
    this.list[this.rear] = number;
    this.rear = (this.rear + 1) % this.size;
    return true;
  }

  /**
   * 从循环队列中删除一个元素。如果成功删除则返回真。
   * 删除
   * @return {boolean}
   */
  deQueue() {
    if (this.isEmpty()) return false;
    // let result = this.list[this.front];
    this.front = (this.front + 1) % this.size;
    return true;
  }

  /**
   * 从队首获取元素。如果队列为空，返回 -1 。
   * @return {number}
   */
  Front() {
    if (this.isEmpty()) return -1;
    return this.list[this.front];
  }

  /**
   * 获取队尾元素。如果队列为空，返回 -1 。
   * @return {number}
   */
  Rear() {
    if (this.isEmpty()) return -1;
    return this.list[this.rear === 0 ? this.size - 1 : this.rear - 1];
  }

  /**
   * 检查循环队列是否为空。
   * 队首和队尾指针相等
   * @return {boolean}
   */
  isEmpty() {
    return this.front === this.rear && !this.list[this.front];
  }

  /**
 * 检查循环队列是否已满。
 * @return {boolean}
 */
  isFull() {
    return this.front === (this.rear + 1) % this.size;
  }
}



/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

/**
* 任务调度器
* @param {character[]} tasks
* @param {number} n
* @return {number}
*/
export const leastInterval = (tasks, n) => {
  let count = new Array(26);
  count.fill(0);
  //统计词频
  for (let i = 0; i < tasks.length; i++) {
    count[tasks[i].charCodeAt() - 'A'.charCodeAt()]++;
  }
  //词频排序，升序排序，count[25]是频率最高的
  count.sort((a, b) => a - b);
  let maxCount = 0;
  //统计有多少个频率最高的字母
  for (let i = 25; i >= 0; i--) {
    if (count[i] != count[25]) {
      break;
    }
    maxCount++;
  }

  //公式算出的值可能会比数组的长度小，取两者中最大的那个
  return Math.max((count[25] - 1) * (n + 1) + maxCount, tasks.length);
};
