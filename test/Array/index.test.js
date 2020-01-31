import { letterCombinations, hasGroupsSizeX, canPlaceFlowers, grayCode } from '../../src/Array';

test('letterCombinations: "23"', () => {
  expect(letterCombinations('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
});

test('telComb:234', () => {
  expect(letterCombinations('234')).toEqual([
    'adg', 'adh', 'adi',
    'aeg', 'aeh', 'aei',
    'afg', 'afh', 'afi',
    'bdg', 'bdh', 'bdi',
    'beg', 'beh', 'bei',
    'bfg', 'bfh', 'bfi',
    'cdg', 'cdh', 'cdi',
    'ceg', 'ceh', 'cei',
    'cfg', 'cfh', 'cfi'
  ]);
});

test('hasGroupsSizeX: [1,1,1,2,2,2,3,3]', () => {
  expect(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3])).toBe(false);
});

test('canPlaceFlowers([1,0,0,0,1], 1)', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
});
test('canPlaceFlowers([1,0,0,0,1], 2)', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
});
test('grayCode(2)', () => {
  expect(grayCode(2)).toEqual([0, 1, 3, 2]);
});

