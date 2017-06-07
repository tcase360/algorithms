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
