import {
  LinkedList,
  sortList
} from '../../src/LinkedList';

test('sortList', () => {
  let head = new LinkedList([4, 1, 3, 2, 7, 9, 12, 10, 11]);
  sortList(head);
  // 取出值放入数组，用于测试
  let res = [];
  let next = head;
  while (next) {
    res.push(next.val);
    next = next.next;
  }
  expect(res).toEqual([1, 2, 3, 4, 7, 9, 10, 11, 12]);
});