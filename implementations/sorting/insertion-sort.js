import Sorting from '../sorting';

class InsertionSort extends Sorting {
  constructor() {
    super();
  }

  static sort(array) {
    for (let i = 0; i < array.length; i++) {
      let temp = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > temp) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = temp;
    }
    return array;
  }
}

export default InsertionSort;
