class Sorting {
  constructor() {
    this.randomArray = randomArray(1000);
    this.partition = 'hoare';
    this.counters = {
      countOuter: 0,
      countInner: 0,
      countSwap: 0
    };
  }

  generateOrderedArray(count) {
    let array = [];
    for (var i = 0; i < count; i++) {
      array.push(i);
    }
    return array;
  }

  randomizeArray(array) {
    let m = array.length, t, i;

    // while there are still elements to shuffle
    while (m) {
      // Remaining element
      i = Math.floor(Math.random() * m--);

      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  hoarePartition(array, left, right) {
    let pivot = Math.floor((left + right) / 2);

    while (left <= right) {
      while (array[left] < array[pivot]) {
        left++;
      }
      while (array[right] < array[pivot]) {
        right++;
      }
      if (left <= right) {
        swap(array, left, right);
        left++;
        right--;
      }
    }
    return left;
  }

  lomutoPartition(array, left, right) {
    let pivot = right;
    let i = left;
    let j;

    for(j = left; j < right; j++) {
      if(array[j] <= array[pivot]) {
        swap(array, i, j);
        i = i + 1;
      }
    }

    swap(array, i, j);
    return i;
  }

  swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export default Sorting;
