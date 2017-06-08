// Generate an array of specified length with random numbers
export const randomArray = (number) => {
  let arr = [];

  for(let x = 0; x < number; x++) {
    arr.push(Math.floor(Math.random() * number));
  }
  return arr;
};

// Swap two elements of an array
export const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// Lomuto Partition
export const lomutoPartition = (array, left, right) => {
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

// Hoare Partition
export const hoarePartition = (array, left, right) => {
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

// Returns an array that is randomized - Fisher Yates algorithm
export const randomizeArray = (array) => {
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

// Generate Ordered Array
export const generateOrderedArray = (number) => {
  let array = [];
  for (var i = 0; i < number; i++) {
    array.push(i);
  }
  return array;
}
