import { isEqual1 } from '../../src/Question';

test('isEqual1', () => {
  expect(isEqual1({}, {})).toBe(true);
  expect(isEqual1([], [])).toBe(true);
  expect(isEqual1(null, null)).toBe(true);
  expect(isEqual1([1], { 0: 1 })).toBe(false);
  expect(isEqual1({ a: 1 }, { b: 2 })).toBe(false);
  expect(isEqual1({ a: 1, b: 1 }, { a: 1, b: { c: 1 } })).toBe(false);
  expect(isEqual1({ a: 1, b: [1] }, { a: 1, b: { 0: 1 } })).toBe(false);
  expect(isEqual1({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } })).toBe(true);
  expect(isEqual1([{ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }], [{ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }])).toBe(true);
  expect(isEqual1([{ a: 1, b: { c: 1, cc: [1] } }], [{ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }])).toBe(false);
  expect(isEqual1({ a: [1, 2, 3], b: { c: 1, cc: [1] } }, { a: [1, 2, 3], b: { c: 1, cc: [1] } })).toBe(true);
});

// console.log(isEqual1(null, null));
// console.log(isEqual1([1], [1]));
// console.log(isEqual1({ a: 1 }, { b: 1 }));
// console.log(isEqual1({ 0: 1 }, [1]));
// console.log(isEqual1([{ a: 1, b: 2 }, { b: 2, a: 1, c: 1, d: 111 }, 11, null], [{ a: 1, b: 2 }, { b: 2, a: 1, c: 1, d: 111 }, 1, null]))
// console.log(isEqual1({ b: 2, a: { f: 33, ff: { a: 2 } }, c: 1, d: [1, 2, 3, 1] }, { b: 2, a: { f: 33, ff: { a: 2 } }, c: 1, d: [1, 2, 3, 1] }))

