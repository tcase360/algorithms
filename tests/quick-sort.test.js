const assert = require('assert');
import QuickSort from '../implementations/sorting/quick-sort';

const unsortedArray = [4, 3, 5, 8, 6, 7, 9, 10, 0, 2, 1];
const sortedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('Array', function() {
  describe('#quickSortBasic', function() {
    it('should return a sorted array', function() {
      assert.equal(sortedArray.join(','), QuickSort.basicImplementation(unsortedArray).join(','));
    });
  });
});

// describe('Array', function() {
//   describe('#quickSort', function() {
//     it('should return a sorted array', function() {
//       assert.equal(sortedArray.join(','), quickSort(unsortedArray).join(','));
//     });
//   });
// });
