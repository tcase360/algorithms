/**
 * Quick sort algorithm
 *
 * This is one of the more efficient sorting algorithms,
 * making it rather important. It's called a "divide & conquer"
 * algorithm, which makes it sound pretty awesome. Here's how
 * it works:
 *
 * First, pick a partition. In the code, the variable will be called
 * a "pivot". The basic implementation will start with
 * the first element in the array, but there are other ways to
 * determine this which we will get into later.
 *
 * Basically, the algorithm will take the partition and
 * compare it with the rest of the array, and any elements
 * less than the partition will go into the "lesser" array,
 * any elements greater than the partition will go into the
 * "greater" array. Concat the arrays (don't forget the
 * partition element also) and rinse and repeat all the way
 * through the array.
 *
 */

import { swap, randomArray } from '../communal-functions';

class QuickSort {

  constructor() {
    this.randomArray = randomArray(1000);
  }

  static basicImplementation(array) {
    if(array.length < 2) {
      return array;
    }

    let pivot = array[0];
    let lesser = [];
    let greater = [];

    for(let i = 1; i < array.length; i++) {
      if(array[i] < pivot) {
        lesser.push(array[i]);
      } else {
        greater.push(array[i]);
      }
    }

    return this.basicImplementation(lesser).concat(pivot, this.basicImplementation(greater));
  }

  static optimizedImplementation(array, left, right) {
    left = left || 0;
    right = right || array.length - 1;


  }

  partitionLomuto(array, left, right) {
    let pivot = right;
    let i = left;

    for(let j = left; j < right; j++) {
      if(array[j] <= array[pivot]) {
        swap(array, i, j);
        i = i + 1;
      }
    }

    swap(array, i, j);
    return i;
  }
}

export default QuickSort;

let arr = randomArray(1000);
