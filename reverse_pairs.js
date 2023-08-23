function merge(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

function countPairs(arr, low, mid, high) {
  let right = mid + 1;
  let cnt = 0;
  for (let i = low; i <= mid; i++) {
    while (right <= high && arr[i] > 2 * arr[right]) right++;
    cnt += right - (mid + 1);
  }
  return cnt;
}

function mergeSort(arr, low, high) {
  let cnt = 0;
  if (low >= high) return cnt;
  let mid = Math.floor((low + high) / 2);
  cnt += mergeSort(arr, low, mid);
  cnt += mergeSort(arr, mid + 1, high);
  cnt += countPairs(arr, low, mid, high);
  merge(arr, low, mid, high);
  return cnt;
}

function team(skill, n) {
  return mergeSort(skill, 0, n - 1);
}

let a = [40, 25, 19, 12, 9, 6, 2];
let n = 5;
let cnt = team(a, n);
console.log(cnt);
