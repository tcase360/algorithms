import {
  swap,
  randomArray,
  generateOrderedArray,
  randomizeArray,
 } from '../communal-functions';

 import Sorting from '../sorting';

 class MergeSort extends Sorting {
   constructor() {
     this.randomArray = super.randomArray(1000);
     this.counters = {
       countOuter: 0,
       countInner: 0,
       countSwap: 0
     };

     this.topDownMerge = this.topDownMerge.bind(this);
     this.bottomUpMerge = this.topDownMerge.bind(this);
   }

   static topDown(array) {
     if(array.length < 2) return array;

     let middle = Math.floor(array.length / 2);
     let left = array.slice(0, middle);
     let right = array.slice(middle);

     return this.topDownMerge(this.topDown(left), this.topDown(right));
   }

   static topDownMerge(left, right) {
     let array = [];

     while (left.length && right.length) {
       if(left[0] > right[0]) {
         array.push(left.shift());
       } else {
         array.push(right.shift());
       }
     }

     return array.concat(left.slice()).concat(right.slice());
   }

   static bottomUp(array) {
     let step = 1;
     while (step < array.length) {
       let left = 0;
       while (left + step < array.length) {
         this.bottomUpMerge(array, left, step);
         left += step * 2;
       }
       step *= 2;
     }

     return array;
   }

   static bottomUpMerge(array, left, step) {
     let right = left + step;
     let end = Math.min(left + step * 2 - 1, array.length - 1);
     let leftMoving = left;
     let rightMoving = right;
     let temp = [];

     for (var i = left; i <= end; i++) {
       if ((array[leftMoving] <= array[rightMoving] || rightMoving > end) &&
            leftMoving < right) {
          temp[i] = array[leftMoving];
          leftMoving++;
       } else {
         temp[i] = array[rightMoving];
         rightMoving++;
       }
     }

     for (var j = left; j <= end; j++) {
       array[j] = temp[j];
     }
     return array;
   }
 }

 export default MergeSort;
