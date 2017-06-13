class Sorting {
  constructor() {
    this.expectedArray = generateOrderedArray(1000);
    this.randomArray = randomizeArray(this.expectedArray);
    this.partition = 'hoare';
    this.counters = {
      countOuter: 0,
      countInner: 0,
      countSwap: 0
    };
  }

  static generateOrderedArray(count) {
    let array = [];
    for (var i = 0; i < count; i++) {
      array.push(i);
    }
    return array;
  }

  static randomizeArray(array) {
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

  static hoarePartition(array, left, right) {
    let pivot = Math.floor((left + right) / 2);

    while (left <= right) {
      while (array[left] < array[pivot]) {
        left++;
      }
      while (array[right] < array[pivot]) {
        right++;
      }
      if (left <= right) {
        this.swap(array, left, right);
        left++;
        right--;
      }
    }
    return left;
  }

  static lomutoPartition(array, left, right) {
    let pivot = right;
    let i = left;
    let j;

    for(j = left; j < right; j++) {
      if(array[j] <= array[pivot]) {
        this.swap(array, i, j);
        i = i + 1;
      }
    }

    this.swap(array, i, j);
    return i;
  }

  static swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export default Sorting;
