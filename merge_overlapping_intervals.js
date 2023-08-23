function mergeOverlappingIntervals(arr) {
  const n = arr.length;

  arr.sort((a, b) => a[0] - b[0]);

  const ans = arr[0];

  for (let i = 0; i < n; i++) {
    const last = ans[arr.length - 1];
    const curr = arr[i];

    if (last && curr[0] <= last[1]) {
      last[1] = Math.max(last[1], curr[1]);
      ans[arr.length - 1] = last;
    } else {
      ans.push(curr);
    }
  }
  return ans;
}

const arr = [
  [1, 3],
  [8, 10],
  [2, 6],
  [15, 18],
];
console.log(mergeOverlappingIntervals(arr));
