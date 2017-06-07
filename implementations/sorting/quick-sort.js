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
 * "greater" array
 *
 */

import { swap, randomArray } from '../communal-functions';

class QuickSort {

  constructor() {
    this.randomArray = randomArray(1000);
  }

  get basicImplementation() {
    return this.basicImplementation(array);
  }

  basicImplementation(array) {
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

    return quickSortBasic(lesser).concat(pivot, quickSortBasic(greater));
  }
}

let arr = randomArray(1000);
