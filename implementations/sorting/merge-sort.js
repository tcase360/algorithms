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

     return this.topDownMerge(topDown(left), topDown(right));
   }

   topDownMerge(left, right) {

   }

   static bottomUp(array) {

   }

   bottomUpMerge(left, right) {

   }
 }

 export default MergeSort;
