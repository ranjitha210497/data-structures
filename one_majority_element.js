function majorityElement(arr) {
  let count = 0;
  let element = null;
  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      element = arr[i];
    }
    if (arr[i] === element) {
      count++;
    } else {
      count--;
    }
  }
  return element;
}

console.log(majorityElement([7, 7, 5, 7, 5, 1, 5, 7, 5, 5, 7, 7, 5, 5, 5, 5]));
