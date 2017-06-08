const assert = require('assert');
import MergeSort from '../implementations/sorting/merge-sort';

const unsortedArray = [4, 3, 5, 8, 6, 7, 9, 10, 0, 2, 1];
const sortedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('Array', function() {
  describe('#MergeSort.basicImplementation', function() {
    it('should return a sorted array from high to low', function() {
      assert.equal(sortedArray.reverse().join(','), MergeSort.topDown(unsortedArray).join(','));
    });
  });
});

// describe('Array', function() {
//   describe('#MergeSort.optimizedImplementation', function() {
//     it('should return a sorted array', function() {
//       assert.equal(sortedArray.join(','), MergeSort.bottomUp(unsortedArray).join(','));
//     });
//   });
// });
