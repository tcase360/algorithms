export const randomArray = (number) => {
  let arr = [];

  for(let x = 0; x < number; x++) {
    arr.push(Math.floor(Math.random() * number));
  }
  return arr;
};

export const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

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
