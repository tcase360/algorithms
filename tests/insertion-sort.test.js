const assert = require('assert');
import InsertionSort from '../implementations/sorting/insertion-sort';

const unsortedArray = [4, 3, 5, 8, 6, 7, 9, 10, 0, 2, 1];
// const sortedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const insertionSort = new InsertionSort();

let expectedArray = InsertionSort.generateOrderedArray(10);

describe('Array', function() {
  describe('#InsertionSort.sortBasic', function() {
    it('should return a sorted array', function() {
      assert.equal(expectedArray.join(','), InsertionSort.sort(unsortedArray).join(','));
    });
  });
});
