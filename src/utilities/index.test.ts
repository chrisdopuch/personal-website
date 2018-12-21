import { shuffleArray } from './index';

describe('Utilities', () => {
  describe('shuffleArray', () => {
    it('should return a shuffled array', () => {
      const originalArray = [...Array(100).keys()];
      const inputArray = originalArray.slice();

      shuffleArray(inputArray);

      expect(inputArray).not.toEqual(originalArray);
    });
  });
});
