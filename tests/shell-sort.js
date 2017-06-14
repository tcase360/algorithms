const assert = require('assert');
import ShellSort from '../implementations/sorting/shell-sort';

// const unsortedArray = [4, 3, 5, 8, 6, 7, 9, 10, 0, 2, 1];
// const sortedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const shellSort = new ShellSort();

let expectedArray = ShellSort.expectedArray;
let arrayToBeSorted = ShellSort.randomArray;

describe('Array', function() {
  describe('#ShellSort.sortBasic', function() {
    it('should return a sorted array', function() {
      assert.equal(arrayToBeSorted.join(','), shellSort.sortBasic(expectedArray).join(','));
    });
  });
});
