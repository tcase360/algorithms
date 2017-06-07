/**
 * Quick sort algorithm
 *
 *
 */

import { swap, randomArray } from '../communal-functions';

export function quickSortBasic(array) {
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

let arr = randomArray(1000);
