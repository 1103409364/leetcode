import { calPoints, maximalRectangle } from '../../src/Stack';

test('calPoints(["5","2","C","D","+"])', () => {
  expect(calPoints(['5', '2', 'C', 'D', '+'])).toBe(30);
});
test('maximalRectangle([ ["1","0","1","0","0"], ["1","0","1","1","1"], ["1","1","1","1","1"], ["1","0","0","1","0"] ])', () => {
  expect(maximalRectangle([['1', '0', '1', '0', '0'], ['1', '0', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '0', '0', '1', '0']])).toBe(6);
});
