/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 声明链表的节点
class Node {
  constructor(value) {
    this.val = value;
    this.next = undefined;
  }
}

// 声明链表的数据结构
class LinkedList {
  constructor(arr) {
    // 链表的头节点。取出一个值做头
    let head = new Node(arr.shift());
    let next = head;
    arr.forEach(item => {
      next.next = new Node(item);
      // 保存整个节点的指针，用于下一个 item 生成的节点 new Node(item);
      next = next.next;
    });
    return head;
  }
}

// 交换两个节点的【值】，交换值，指针指向不用处理
let swap = (p, q) => {
  // let val = p.val;
  // p.val = q.val;
  // q.val = val;
  [p.val, q.val] = [q.val, p.val];
};

// 寻找下一个基准元素节点
let partion = (begin, end) => {
  // 起始默认选第一个为基准
  let pivotVal = begin.val;
  // i j 表示两个指针
  let i = begin;
  let j = begin.next;
  while (j !== end) {
    // 小于基准，让 i 移到下一个节点，交换 i j 节点的值，j再下移一位。不小于基准值，j 直接下移不做交换
    if (j.val < pivotVal) {
      i = i.next;
      swap(i, j);
    }
    j = j.next;
  }
  // 交换基准和 p
  swap(i, begin);
  return i;
};

// 第一次 end 为 undefined
let sortList = (begin, end) => {
  if (begin !== end) {
    let part = partion(begin, end);
    sortList(begin, part);
    sortList(part.next, end);
  }
};

// let head = new LinkedList([4, 1, 3, 2, 7, 9, 12, 10, 11]);
// sortList(head);
// console.log(head);

/**
 * 环形链表
 * @param {ListNode} head //参数是一个链表，leetCode 提交不用实现链表
 * @return {boolean}
 */
let hasCycle = (head) => {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    if (slow === fast) return true;
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
};

export {
  LinkedList,
  sortList,
  hasCycle
};
