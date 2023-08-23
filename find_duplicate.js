function findDuplicate(arr) {
  let n = arr.length;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return arr[i];
    }
  }
}

const arr = [3, 1, 3, 4, 2];
console.log(findDuplicate(arr));
