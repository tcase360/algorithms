/**
 * The bubble sorting algorithm is fairly simple:
 *
 * First, it takes an unsorted algorithm, and then
 * it will iterate through each element, comparing
 * the current element and the next element in the
 * array. If the current element is greater than the
 * next element, it swaps.
 *
 * This algorithm has to go through two for loops, and
 * the more efficient one is the do..while loop because
 * as long as swapping is happening, it will keep going.
 * Otherwise it will stop the loop and display the array.
 *
 * The other, more clear but less efficient way is to
 * have two for loops and if the first element in the
 * comparison is greater than the second, they swap.
 * The comparison happens in the inner for loop, so as to
 * make sure that it iterates through all of them a
 * sufficient amount of times.
 *
 * Essentially, the bubble sort passes through an array
 * and on each pass, it will place the next largest number
 * in the correct place. This makes sense when people say
 * "bubble", when you think about it.
 *
 * ADVANTAGE:
 * The biggest advantage that a bubble sort has, is the
 * fact that if it passes through an array without swapping
 * anything, then it will know that it is finished. No other
 * sorting algorithms can do that.
 *
 * It's also rather easy to implement.
 *
 * DISADVANTAGE:
 * This is traditionally the least efficient sorting algorithm.
 *
 *
 */

import {
  swap,
  randomArray,
} from '../communal-functions';

import Sorting from '../sorting';

class BubbleSort extends Sorting {

}

export default BubbleSort;


export function bubbleSortBasic(array) {
  for(let i = 0; i < array.length; i++) {
    for(let j = 1; j < array.length; j++) {
      if(array[j - 1] > array[j]) {
        swap(array, j - 1, j);
      }
    }
  }
  return array;
}


export function bubbleSort(array) {
  console.time('bubble sort');
  let swapped;
  do {
    swapped = false;
    for(let i = 0; i < array.length; i++) {
      if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);
  console.timeEnd('bubble sort');
  return array;
}



export function bubbleSortWithLogs(array) {
  var countOuter = 0;
  var countInner = 0;
  var countSwap = 0;

  var swapped;
  do {
    countOuter++;
    swapped = false;
    for(var i = 0; i < array.length; i++) {
      countInner++;
      if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
        countSwap++;
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while(swapped);

  console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
  return array;
}

let arr = randomArray(10);

let newSortedArray = bubbleSortWithLogs(arr);
