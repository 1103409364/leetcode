import { restoreIpAddresses1, restoreIpAddresses2 } from '../../src/Recursion';

test('restoreIpAddresses(\'010010\')', () => {
  expect(restoreIpAddresses1('010010')).toEqual(['0.10.0.10', '0.100.1.0']);
});
test('restoreIpAddresses2(\'010010\')', () => {
  expect(restoreIpAddresses2('010010')).toEqual(['0.10.0.10', '0.100.1.0']);
});