import {
  swap,
  randomArray,
  generateOrderedArray,
  randomizeArray,
 } from '../communal-functions';

 class MergeSort {
   constructor() {
     this.randomArray = randomArray(1000);
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

   }

   static bottomUpMerge(left, right) {

   }
 }

 export default MergeSort;
