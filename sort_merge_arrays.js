function merge(arr1, arr2) {
  let left = arr1.length - 1;
  let right = 0;
  while (left >= 0 && right < arr2.length) {
    if (arr1[left] > arr2[right]) {
      [arr1[left], arr2[right]] = [arr2[right], arr1[left]];
      left--;
      right++;
    } else break;
  }

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  return [...arr1, ...arr2];
}

let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 9];

console.log(merge(arr1, arr2));
